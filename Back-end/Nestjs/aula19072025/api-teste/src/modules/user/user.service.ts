import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User
    ) {}

      async create(user: CreateUserDto) {
        await this.validateEmail(user.email);
        
        const createdUser = await this.userModel.create(user)

            return createdUser
    }

    async findAll(){
        return await this.userModel.findAll()
    }
    async update(id: string, user: UpdateUserDto){
        if(user.email){
        await this.validateEmail(user.email);    
        }
        
        const updatedUser = await this.userModel.update(
        { ...user},
        {where: {user_id: id }, returning: true},
    );

        return updatedUser[1][0]
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
}

//DATA TRANSFER OBJECT