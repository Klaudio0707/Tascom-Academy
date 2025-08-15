import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dtos/create-brand.tdo';
import { UpdateBrandDto } from './dtos/update-brand.dto';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
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
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() brand: UpdateBrandDto
    ) {

        return await this.brandService.update(id, brand);
    }

}
