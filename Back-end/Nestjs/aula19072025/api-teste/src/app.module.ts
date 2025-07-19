import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CarModelModule } from './modules/carModel/carModel.module';


@Module({
  imports: [UserModule, CarModelModule],
  providers: [],
})
export class AppModule {}
