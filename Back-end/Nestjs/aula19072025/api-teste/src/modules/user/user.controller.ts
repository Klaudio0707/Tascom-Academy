import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    userModel: any;
    constructor(private readonly userService: UserService) { }

    @Post()
    create(
        @Body() user: CreateUserDto
    ) {
        return this.userService.create(user);
    }
    @Get()
    async findAll() {
        return await this.userService.findAll()
    }
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() user: UpdateUserDto
    ) {

        return await this.userService.update(id, user);
    }
}

