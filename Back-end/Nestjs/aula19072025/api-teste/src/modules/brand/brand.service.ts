import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { brand } from './brand.entity';
import { CreateBrandDto } from './dtos/create-brand.tdos';

@Injectable()
export class BrandService {
    constructor(
        @InjectModel(brand)
        private readonly brandModel: typeof brand
    ){}
   
    async create(brand: CreateBrandDto){
        const createdBrand = await this.brandModel.create(brand)
        return createdBrand
    }

    async findAll(){
        return await this.brandModel.findAll()
    }
}
