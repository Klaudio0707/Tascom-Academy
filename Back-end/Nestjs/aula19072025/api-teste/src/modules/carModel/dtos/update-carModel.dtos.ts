import { IsOptional } from "class-validator";


export class UpdateCarModelDto{
  @IsOptional()
   preco?: number;
}