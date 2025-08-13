import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/user.entity';


@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.registerAsync({
      global: true,
      imports: [],
      useFactory: async () => ({
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: process.env.JWT_EXPIRATION_TIME
          }
      }),
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
