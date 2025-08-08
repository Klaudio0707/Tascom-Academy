import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";


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