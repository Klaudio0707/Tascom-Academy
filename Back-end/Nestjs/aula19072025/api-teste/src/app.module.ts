import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { BrandModule } from './modules/brand/brand.module';
import { CarModelModule } from './modules/carModel/carModel.module';
import { UserModule } from './modules/user/user.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';

@Module({
  imports: [
    UserModule,
    CarModelModule,
    BrandModule,
    VehicleModule,
    DatabaseModule,
    AuthModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
