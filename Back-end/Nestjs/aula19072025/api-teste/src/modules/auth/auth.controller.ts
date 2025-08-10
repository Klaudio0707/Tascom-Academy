import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}
    
    @Post('login')
    async signIn(
        @Body() data: {
            username: string,
            password: string
        } 
    ){
        const login = await this.authService.signIn(data.username, data.password)

        return login;
    }
}
