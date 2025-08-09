import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Vehicle } from './vehicle.entity';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { UpdateVehicleDto } from './dtos/update-vehicle.dto';
import { User } from '../user/user.entity';
import { CarModel } from '../carModel/carModel.entity';
import { Brand } from '../brand/brand.entity';

@Injectable()
export class VehicleService {
    constructor(
        @InjectModel(Vehicle)
        private readonly vehicle: typeof Vehicle,
    ) {}

    async create(createVehicleDto: CreateVehicleDto) {
        const { placa } = createVehicleDto;

       
        const existingVehicle = await this.vehicle.findOne({
            where: { placa },
        });

        if (existingVehicle) {
            throw new HttpException(
                `Veículo com a placa '${placa}' já existe.`,
                HttpStatus.CONFLICT, // 409 
            );
        }

        const newVehicle = await this.vehicle.create(createVehicleDto);
        return newVehicle;
    }

   
    async findAll() {
        return await this.vehicle.findAll({
            include: [
                { model: User, attributes: ['user_id', 'name', 'email'] }, 
                { model: CarModel, include: [{ model: Brand, attributes: ['name'] }] }
            ],
        });
    }

    
    async findOne(id: string) {
        const vehicle = await this.vehicle.findOne({
            where: { vehicle_id: id },
            include: [User, CarModel],
        });

        if (!vehicle) {
            throw new HttpException('Veículo não encontrado', HttpStatus.NOT_FOUND);
        }

        return vehicle;
    }

    
    async update(id: string, updateVehicleDto: UpdateVehicleDto) {
      
        await this.findOne(id);

        const [numberOfAffectedRows, [updatedVehicle]] =
            await this.vehicle.update(updateVehicleDto, {
                where: { vehicle_id: id },
                returning: true,
            });

        return updatedVehicle;
    }


    // async remove(id: string) {
      
    //     const vehicleToRemove = await this.findOne(id);
        
    //     await this.vehicleRepository.destroy({ where: { vehicle_id: id } });

    
    //     return vehicleToRemove;
    // }
}