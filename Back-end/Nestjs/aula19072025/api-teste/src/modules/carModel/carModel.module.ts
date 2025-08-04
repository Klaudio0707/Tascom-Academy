import { Module } from '@nestjs/common';
import { CarModelService } from './carModel.service';
import { CarModelController } from './carModel.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { carModel } from './carModel.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([carModel]),
],
  controllers: [CarModelController],
  providers: [CarModelService],
})
export class CarModelModule {}
