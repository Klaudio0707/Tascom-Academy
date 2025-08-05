import { Module } from '@nestjs/common';
import { CarModelModule } from './modules/carModel/carModel.module';
import { UserModule } from './modules/user/user.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { BrandModule } from './modules/brand/brand.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    UserModule,
    CarModelModule,
    BrandModule,
    VehicleModule,
    DatabaseModule],
  providers: [],
  controllers: [],
})
export class AppModule {}
