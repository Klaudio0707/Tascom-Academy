import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { CarModelService } from './carModel.service';
import { CreateCarModelDto } from './dtos/create-carModel.dto';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('carModel')
export class CarModelController {

    constructor(private readonly carModelService: CarModelService) { }
   
    @Post('update')
    create(
        @Body()car: CreateCarModelDto
    ) {
        return this.carModelService.create(car)
    }

    @Get('allCar')
    async findAll() {
    return await this.carModelService.findAll();
}
@Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT) 
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.carModelService.remove(id);
    }
}
