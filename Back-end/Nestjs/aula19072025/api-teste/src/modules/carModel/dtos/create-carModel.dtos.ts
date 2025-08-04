import { IsNotEmpty, IsString, isUUID, IsUUID } from "class-validator";


export class CreateCarModelDto{
    @IsNotEmpty()
    @IsString()
   model: string;
   
   @IsNotEmpty()
   ano: number;


   @IsNotEmpty()
   preco: number;

    @IsUUID()
   @IsString()// Ou @IsNumber(), dependendo do tipo do seu ID
   @IsNotEmpty()
   brand_id: string; // ou number
 }
