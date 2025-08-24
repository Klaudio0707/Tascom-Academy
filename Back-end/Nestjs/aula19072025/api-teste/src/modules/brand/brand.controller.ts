import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dtos/create-brand.tdo';
import { UpdateBrandDto } from './dtos/update-brand.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('brand')
export class BrandController {
    brandModel: any;
    constructor(private readonly brandService: BrandService) { }

    @ApiOperation({ summary: 'Cria um nova marca de carro' })
    @Post()
    create(
        @Body() brand: CreateBrandDto
    ) {
        return this.brandService.create(brand)
    }
    @ApiOperation({ summary: 'Mostra todos as marcas de carro' })
    @Get()
    async findAll() {
        return await this.brandService.findAll()
    }

    @ApiOperation({ summary: 'atualiza uma marca de carro pelo id ' })
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() brand: UpdateBrandDto
    ) {

        return await this.brandService.update(id, brand);
    }

}
