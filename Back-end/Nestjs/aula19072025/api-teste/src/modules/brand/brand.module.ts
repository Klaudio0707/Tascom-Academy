import { Module } from '@nestjs/common';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { brand } from './brand.entity';

@Module({
imports: [
    SequelizeModule.forFeature([brand]),
],
controllers: [BrandController],
providers: [BrandService],
})
export class BrandModule {}
