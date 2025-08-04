import { IsNotEmpty } from "class-validator";


export class CreateVehicleDto{
    @IsNotEmpty()
    placa: string;
    cor: string;
    ano_fabricacao: number;
    quilometragem: number;
    
   

}