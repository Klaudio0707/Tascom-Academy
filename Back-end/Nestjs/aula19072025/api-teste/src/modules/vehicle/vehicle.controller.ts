import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { UpdateVehicleDto } from './dtos/update-vehicle.dto';
import { VehicleService } from './vehicle.service';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';


@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('vehicle')
export class VehicleController {
    constructor(private readonly vehicleService: VehicleService) { }


    @ApiOperation({ summary: 'Cria um novo veiculo' })
    @Post('new')
    create(@Body() createVehicleDto: CreateVehicleDto) {
        return this.vehicleService.create(createVehicleDto);
    }
    @ApiOperation({ summary: 'Lista todos os veiculos' })
    @Get('allVehicle')
    findAll() {
        return this.vehicleService.findAll();
    }
    @ApiOperation({ summary: 'Mostra o veiculo do id correspondente' })
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.vehicleService.findOne(id);
    }
    @ApiOperation({ summary: 'atualiza o veiculo pelo id' })
    @Patch(':id')
    update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateVehicleDto: UpdateVehicleDto,
    ) {
        return this.vehicleService.update(id, updateVehicleDto);
    }
    @ApiOperation({ summary: 'Deleta o veiculo pelo id' })
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.vehicleService.remove(id);
    }
}

