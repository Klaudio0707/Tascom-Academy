import { Module } from '@nestjs/common';
import { CarModelModule } from './modules/carModel/carModel.module';
import { UserModule } from './modules/user/user.module';
import { BrandController } from './modules/brand/brand.controller';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { BrandModule } from './modules/brand/brand.module';
import { BrandService } from './modules/brand/brand.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserModule, CarModelModule, BrandModule, VehicleModule,DatabaseModule],
  providers: [ BrandService],
  controllers: [BrandController],
})
export class AppModule {}
