import { Module } from '@nestjs/common';
import { CarModelService } from './carModel.service';
import { CarModelController } from './carModel.controller';

@Module({
  controllers: [CarModelController],
  providers: [CarModelService],
})
export class CarModelModule {}
