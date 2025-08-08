import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateVehicleDto{
    @IsString()
    @IsNotEmpty()
    placa: string;

    @IsString()
    cor: string;

    @IsNumber()
    ano_fabricacao: number;

    @IsNumber()
    quilometragem: number;
    

}