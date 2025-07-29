import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Prisma, User as UserModel } from "../../generated/prisma"
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    async signupUser(
        @Body() userData: Prisma.UserCreateInput,
    ): Promise<UserModel> {
        return this.userService.createUser(userData)
    }
    @Get(":id")
    async getUser(@Param('id') id: string): Promise<UserModel | null> {
        return this.userService.user({ id: Number(id) });
    }
}
