import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    create(
        @Body()
        user: object
    ) {
        return this.userService.create(user);
    }

    @Get('allUser')
    GetName(){
    return this.userService.getUser();
}
}
