import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { Vehicle } from './vehicle.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forFeature([Vehicle]),
  ],
  providers: [VehicleService],
  controllers: [VehicleController]
})
export class VehicleModule { }
