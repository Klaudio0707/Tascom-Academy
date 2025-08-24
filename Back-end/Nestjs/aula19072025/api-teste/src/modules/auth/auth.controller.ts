import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}
    @ApiOperation({summary:'Cria um novo usuário'})
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
