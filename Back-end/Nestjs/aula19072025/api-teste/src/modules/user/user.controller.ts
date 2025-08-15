import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';



@Controller('user')
export class UserController {
    userModel: any;
    constructor(private readonly userService: UserService) { }

    @Post('new')
    create(
        @Body() user: CreateUserDto
    ) {
        return this.userService.create(user);
    }
    @UseGuards(AuthGuard)
    @Get('allUser')
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
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT) 
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.userModel.remove(id);
    }
}

