import { IsBoolean, IsNotEmpty, IsString, IsEmail, IsOptional, IsStrongPassword } from "class-validator";



export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
    })
    password: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsBoolean()
    @IsOptional()
    active?: boolean;

}