import { IsOptional, IsString } from "class-validator";
import { CreateBrandDto } from "./create-brand.tdos";
import { PartialType } from "@nestjs/mapped-types";


export class UpdateBrandDto extends PartialType(CreateBrandDto){

   marca?: string
}