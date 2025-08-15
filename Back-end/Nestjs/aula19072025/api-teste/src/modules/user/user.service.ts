import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User
    ) {}

      async create(user: CreateUserDto) {
        await this.validateEmail(user.email);
        
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const createdUser = await this.userModel.create({
            ...user,
            password: hashedPassword,

         });

            return createdUser
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
    async findAll(){
        return await this.userModel.findAll()
    }
    async update(id: string, user: UpdateUserDto){
        if(user.email){
        await this.validateEmail(user.email);    
        }

        if (user.password) {
            user.password = await bcrypt.hash(user.password, 10);
        }
        const [, [updatedUser]] = await this.userModel.update(
            { ...user },
            { where: { user_id: id }, returning: true },
        );

        return updatedUser;
    }
    async validateEmail(email: string) {
        const emailAlreadyExists = await this.userModel.findOne({
            where: {email:email},
        })    

if(emailAlreadyExists){
    throw new HttpException("Email já existente", HttpStatus.BAD_REQUEST)
}
        return true
    }
        async findByUserName(username: string){
            const user = await this.userModel.findOne({
                where: { username: username},
            });
            return user;
        }
        
        async remove(id: string) {
            // 1. Garante que o usuário existe
            const userToRemove = await this.findOne(id);
            
            // 2. Remove o usuário
            await this.userModel.destroy({ where: { user_id: id } });
            
            // Retorna o usuário que foi removido (sem a senha) como confirmação
            return userToRemove;
        }

}

//DATA TRANSFER OBJECT