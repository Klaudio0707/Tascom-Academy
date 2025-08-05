import { Body, Controller, Get, Post } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dtos/create-brand.tdos';


@Controller('brand')
export class BrandController {
    brandModel: any;
    constructor(private readonly brandService: BrandService) { }

    @Post()
    create(
        @Body() brand: CreateBrandDto
    ) {
        return this.brandService.create(brand)
    }
    @Get()
    async findAll() {
        return await this.brandService.findAll()
    }

}
