import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { QueryUserDto } from './dtos/query-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User
    ) {}

 // src/modules/user/user.service.ts

async create(user: CreateUserDto) {
    console.log('--- 1. ROTA /user/new CHAMADA: Iniciando processo de criação ---');
    console.log('Dados recebidos:', user);

    try {
        console.log('--- 2. Validando e-mail... ---');
        await this.validateEmail(user.email);
        console.log('--- 3. E-mail validado com sucesso! ---');

        console.log('--- 4. Gerando hash da senha... ---');
        const hashedPassword = await bcrypt.hash(user.password, 10);
        console.log('--- 5. Hash da senha gerado! ---');

        console.log('--- 6. Inserindo usuário no banco de dados... ---');
        const createdUser = await this.userModel.create({
            ...user,
            password: hashedPassword,
        });
        console.log('--- 7. Usuário inserido com sucesso no banco! ---');

        const { password, ...result } = createdUser.toJSON();
        
        console.log('--- 8. Retornando usuário criado. ---');
        return result;

    } catch (error) {
        console.error('!!! ERRO NO PROCESSO DE CRIAÇÃO:', error);
        // Re-lança o erro para que o NestJS possa tratá-lo adequadamente
        throw error;
    }
}

    async findOne(id: string) {
        const user = await this.userModel.findByPk(id, {
            attributes: { exclude: ['password'] }
        });

        if (!user) {
            throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
        }
        return user;
    }

    async findAll(query: QueryUserDto) {
        // Melhoria: Lógica de paginação mais robusta.
        const { page = 1, limit = 10 } = query;
        const offset = (page - 1) * limit;

        return this.userModel.findAll({
            offset: offset,
            limit: limit,
            attributes: { exclude: ['password'] } // Boa prática: excluir senhas da listagem
        });
    }

    async update(id: string, user: UpdateUserDto) {
        // Garante que o usuário existe antes de tentar atualizar
        await this.findOne(id);

        if (user.email) {
            await this.validateEmail(user.email);
        }

        if (user.password) {
            user.password = await bcrypt.hash(user.password, 10);
        }

        // Correção: Padroniza o nome da coluna da chave primária para 'id'.
        const [, [updatedUser]] = await this.userModel.update(
            { ...user },
            { where: { id: id }, returning: true },
        );
        
        const { password, ...result } = updatedUser.toJSON();
        return result;
    }

    async remove(id: string) {
        const userToRemove = await this.findOne(id);
        // Correção: Padroniza o nome da coluna da chave primária para 'id'.
        await this.userModel.destroy({ where: { id: id } });
        return userToRemove; // Retorna o usuário que foi removido (sem a senha)
    }

    async validateEmail(email: string) {
        const emailAlreadyExists = await this.userModel.findOne({
            where: { email: email },
        });

        if (emailAlreadyExists) {
            throw new HttpException("Email já existente", HttpStatus.BAD_REQUEST);
        }
    }
    
    async findByUserName(username: string) {
        const user = await this.userModel.findOne({
            where: { username: username },
        });
        return user; // Retorna o usuário com a senha, necessário para o login
    }
}