import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { CarModelService } from './carModel.service';
import { CreateCarModelDto } from './dtos/create-carModel.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('carModel')
export class CarModelController {

    constructor(private readonly carModelService: CarModelService) { }
    @ApiOperation({ summary: 'Criar um modelo de carro' })
    @Post('create')
    create(
        @Body() car: CreateCarModelDto
    ) {
        return this.carModelService.create(car)
    }
    @ApiOperation({ summary: 'listar os modelos' })
    @Get('allCar')
    async findAll() {
        return await this.carModelService.findAll();
    }

    @ApiOperation({ summary: 'Deletar o modelo pelo id' })
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.carModelService.remove(id);
    }
}
