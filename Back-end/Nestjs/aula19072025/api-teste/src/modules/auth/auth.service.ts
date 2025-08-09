import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from "dotenv"

dotenv.config()

@Injectable()
export class AuthService {
    private jwtExpirationTimeInSeconds: number;
    constructor(
        private readonly userService: UserService,
        private readonly jwtService:  JwtService
    ){
        this.jwtExpirationTimeInSeconds = Number(process.env.JWT_EXPIRATION_TIME) 
    }
    async signIn(username:string, password: string) {
        const user = await this.userService.findByUSerName(username);
    if(!user){
        throw new BadRequestException("user name or password incorrect")
    }
    }

}
