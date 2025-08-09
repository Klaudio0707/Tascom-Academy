import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";


export class CreateVehicleDto{
    @IsString({ message: 'A placa deve ser um texto.' })
    @IsNotEmpty({ message: 'A placa não pode estar vazia.' })
    placa: string;

    @IsString({ message: 'A cor deve ser um texto.' })
    @IsNotEmpty({ message: 'A cor não pode estar vazia.' })
    cor: string;

    @IsNumber({}, { message: 'O ano de fabricação deve ser um número.' })
    @IsNotEmpty({ message: 'O ano de fabricação não pode estar vazio.' })
    ano_fabricacao: number;

    @IsNumber({}, { message: 'A quilometragem deve ser um número.' })
    @IsNotEmpty({ message: 'A quilometragem não pode estar vazia.' })
    quilometragem: number;

    @IsUUID('4', { message: 'O ID do usuário deve ser um UUID válido.' })
    @IsNotEmpty({ message: 'O ID do usuário não pode estar vazio.' })
    user_id: string;

    @IsUUID('4', { message: 'O ID do modelo deve ser um UUID válido.' })
    @IsNotEmpty({ message: 'O ID do modelo não pode estar vazio.' })
    model_id: string;
}