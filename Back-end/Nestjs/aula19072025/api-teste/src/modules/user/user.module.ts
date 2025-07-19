import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CarModelModule } from '../carModel/carModel.module';

@Module({
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
