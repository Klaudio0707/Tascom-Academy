import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarModelService } from './carModel.service';
import { CreateCarModelDto } from './dtos/create-carModel.dtos';

@Controller('carModel')
export class CarModelController {

    constructor(private readonly carModelService: CarModelService) { }
   
    @Post()
    create(
        @Body()car: CreateCarModelDto
    ) {
        return this.carModelService.create(car)
    }

    @Get('allCar')
    async findAll() {
    return await this.carModelService.findAll();
}
}
