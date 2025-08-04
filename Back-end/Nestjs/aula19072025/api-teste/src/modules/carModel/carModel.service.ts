import { Injectable } from '@nestjs/common';
import { carModel } from './carModel.entity';
import { CreateCarModelDto } from './dtos/create-carModel.dtos';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CarModelService {
    constructor(
        @InjectModel(carModel)
    private readonly car: typeof carModel
) {}
   async create(car: CreateCarModelDto) {
        const createdCarModel = await this.car.create(car)

        return createdCarModel
    }
  
    async findAll(){
        return await this.car.findAll()
            
        
    }

}
