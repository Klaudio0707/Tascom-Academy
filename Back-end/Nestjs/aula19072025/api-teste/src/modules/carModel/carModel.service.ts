import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { carModel } from './carModel.entity';
import { CreateCarModelDto } from './dtos/create-carModel.dto';
import { UpdateCarModelDto } from './dtos/update-carModel.dto';

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
    async update(id: string, car: UpdateCarModelDto) {
        // Encontre a marca atual para comparar com o novo nome
        const currentCar = await this.car.findByPk(id);
        if (!currentCar) {
            throw new HttpException('Modelo não encontrada', HttpStatus.NOT_FOUND);
        }

        // Valida se o novo nome de marca já existe em outro registro
        if (car.preco && car.preco !== currentCar.preco) {
            await this.checkIfCarModelExists(car.preco);
        }

        const [numberOfAffectedRows, [updatedCarModel]] = await this.car.update(
            { ...car },
            { where: { model_id: id }, returning: true },
        );

        return updatedCarModel;
    }
    private async checkIfCarModelExists(preco: number) {
        const carAlreadyExists = await this.car.findOne({
            where: { preco: preco },
        });
        if (carAlreadyExists) {
            throw new HttpException("Marca já existente", HttpStatus.BAD_REQUEST);
        }
}
}