import { Delete, HttpCode, HttpException, HttpStatus, Injectable, Param, ParseUUIDPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CarModel } from './carModel.entity';
import { CreateCarModelDto } from './dtos/create-carModel.dto';
import { UpdateCarModelDto } from './dtos/update-carModel.dto';
import { Brand } from '../brand/brand.entity';

@Injectable()
export class CarModelService {
    constructor(
        @InjectModel(CarModel)
    private readonly car: typeof CarModel
) {}
   async create(car: CreateCarModelDto) {
        const createdCarModel = await this.car.create(car)

        return createdCarModel
    }
  
    async findAll(){
        return await this.car.findAll()   
    }
    async update(id: string, car: UpdateCarModelDto) {

        const currentCar = await this.car.findByPk(id);
        if (!currentCar) {
            throw new HttpException('Modelo não encontrada', HttpStatus.NOT_FOUND);
        }
        
        const [numberOfAffectedRows, [updatedCarModel]] = await this.car.update(
            { ...car },
            { where: { model_id: id }, returning: true },
        );

        return updatedCarModel;
    }
    async findOne(id: string) {
        
        const carModel = await this.car.findByPk(id, {
            include: [Brand]
        });

        if (!carModel) {
            throw new HttpException('Modelo de carro não encontrado', HttpStatus.NOT_FOUND);
        }
        return carModel;
    }
    async remove(id: string) {
      
        const vehicleToRemove = await this.findOne(id);
        
        await this.car.destroy({ where: { id: id } });

    
        return vehicleToRemove;
    }
//     private async checkIfCarModelExists(id: number) {
//         const carAlreadyExists = await this.car.findOne({
//             where: {  model_id: id },
//         });
//         if (carAlreadyExists) {
//             throw new HttpException("Marca já existente", HttpStatus.BAD_REQUEST);
//         }
// }
}