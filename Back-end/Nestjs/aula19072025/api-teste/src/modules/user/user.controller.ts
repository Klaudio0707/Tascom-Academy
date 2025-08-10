import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';



@UseGuards(AuthGuard)
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
    @UseGuards(AuthGuard)
    @Get()
    async findAll() {
        return await this.userService.findAll()
    }
    @UseGuards(AuthGuard)
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() user: UpdateUserDto
    ) {

        return await this.userService.update(id, user);
    }
}

