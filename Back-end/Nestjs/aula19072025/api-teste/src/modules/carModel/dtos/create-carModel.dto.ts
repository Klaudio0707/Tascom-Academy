import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";


export class CreateCarModelDto{
  @IsString({ message: "O modelo deve ser um texto." })
    @IsNotEmpty({ message: "O modelo não pode estar vazio." })
    model: string;
    
    @IsNumber({}, { message: "O ano deve ser um número." })
    @IsNotEmpty({ message: "O ano não pode estar vazio." })
    ano: number;

    @IsNumber({}, { message: "O preço deve ser um número." })
    @IsNotEmpty({ message: "O preço não pode estar vazio." })
    preco: number;

    @IsUUID('4', { message: "O brand_id deve ser um UUID válido." })
    @IsNotEmpty({ message: "O brand_id não pode estar vazio." })
    brand_id: string;
 }
