import { Module } from '@nestjs/common';
import { CarModelService } from './carModel.service';
import { CarModelController } from './carModel.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarModel } from './carModel.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([CarModel]),
  ],
  controllers: [CarModelController],
  providers: [CarModelService],
})
export class CarModelModule { }
