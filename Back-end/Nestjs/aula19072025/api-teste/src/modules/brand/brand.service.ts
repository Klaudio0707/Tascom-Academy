import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Brand } from './brand.entity';
import { CreateBrandDto } from './dtos/create-brand.tdo'; // Corrigido o nome
import { UpdateBrandDto } from './dtos/update-brand.dto';

@Injectable()
export class BrandService {
    constructor(
        @InjectModel(Brand)
        private readonly brandModel: typeof Brand
    ) { }

    async create(brand: CreateBrandDto) {
        // Valida se a marca já existe antes de criar
        await this.checkIfBrandExists(brand.marca);

        const createdBrand = await this.brandModel.create(brand);
        return createdBrand;
    }

    async update(id: string, brand: UpdateBrandDto) {
        // Encontre a marca atual para comparar com o novo nome
        const currentBrand = await this.brandModel.findByPk(id);
        if (!currentBrand) {
            throw new HttpException('Marca não encontrada', HttpStatus.NOT_FOUND);
        }

     
        if (brand.marca && brand.marca !== currentBrand.marca) {
            await this.checkIfBrandExists(brand.marca);
        }

        const [numberOfAffectedRows, [updatedBrand]] = await this.brandModel.update(
            { ...brand },
            { where: { brand_id: id }, returning: true },
        );

        return updatedBrand;
    }

    async findAll() {
        return await this.brandModel.findAll();
    }

    private async checkIfBrandExists(marca: string) {
        const brandAlreadyExists = await this.brandModel.findOne({
            where: { marca: marca },
        });

        if (brandAlreadyExists) {
            throw new HttpException("Marca já existente", HttpStatus.BAD_REQUEST);
        }
    }
}