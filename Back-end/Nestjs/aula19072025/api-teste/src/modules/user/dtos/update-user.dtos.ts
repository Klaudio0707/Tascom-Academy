import { PartialType } from "@nestjs/mapped-types";
import { IsOptional } from "class-validator";
import { CreateUserDto } from "./create-user.dtos";


export class UpdateUserDto extends PartialType(CreateUserDto){
  cpf?: string
}

// export class UpdateUserDto{
//   @IsOptional()
//    username?:string;
//    password?: string;
//    email?: string;
//    active?: boolean;
// }