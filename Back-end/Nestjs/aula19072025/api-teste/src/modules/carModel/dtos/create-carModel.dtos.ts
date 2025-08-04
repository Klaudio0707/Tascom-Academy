import { IsNotEmpty } from "class-validator";


export class CreateCarModelDto{
    @IsNotEmpty()
   model: string;
   ano: number;
   preco: number;
}