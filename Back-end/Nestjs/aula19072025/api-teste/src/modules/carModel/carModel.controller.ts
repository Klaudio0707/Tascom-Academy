import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarModelService } from './carModel.service';

@Controller('carModel')
export class CarModelController {
    constructor(private readonly carModelService: CarModelService) { }
   
    @Post()
    create(
        @Body()
        cars: object
    ) {
        return this.carModelService.create(cars)
    }

    @Get('allCar')
    GetName(){
    return this.carModelService.getUser();
}
}
