import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { UpdateVehicleDto } from './dtos/update-vehicle.dto';
import { VehicleService } from './vehicle.service';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('vehicle')
export class VehicleController {

    constructor(private readonly vehicleService: VehicleService) {}

    @Post('new')
    create(@Body() createVehicleDto: CreateVehicleDto) {
        return this.vehicleService.create(createVehicleDto);
    }

    @Get('allVehicle')
    findAll() {
        return this.vehicleService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.vehicleService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateVehicleDto: UpdateVehicleDto,
    ) {
        return this.vehicleService.update(id, updateVehicleDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT) 
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.vehicleService.remove(id);
    }
}

