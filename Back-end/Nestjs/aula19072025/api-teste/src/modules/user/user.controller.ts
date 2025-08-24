import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';
import { QueryUserDto } from './dtos/query-user.dto';
import { ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post('new')
    create(@Body() user: CreateUserDto) {
        return this.userService.create(user);
    }

    @ApiBearerAuth()
    @ApiOperation({ summary: 'Listar Todos os Usuarios' })
    @ApiQuery({ name: "describe", required: false, description: "Nome do Usuario" })
    @UseGuards(AuthGuard)
    @Get('allUser')
    findAll(@Query() query: QueryUserDto) {
        return this.userService.findAll(query);
    }


    @ApiBearerAuth()
    @ApiOperation({ summary: 'Atualização do usuario pelo id' })
    @UseGuards(AuthGuard)
    @Patch(':id')
    update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() user: UpdateUserDto
    ) {
        return this.userService.update(id, user);
    }


    @ApiBearerAuth()
    @ApiOperation({ summary: 'Deleta o usuário pelo id' })
    @UseGuards(AuthGuard)
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.remove(id);
    }
}