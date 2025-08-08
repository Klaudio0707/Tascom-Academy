import { PartialType } from "@nestjs/mapped-types";
import { CreateBrandDto } from "./create-brand.tdo";


export class UpdateBrandDto extends PartialType(CreateBrandDto){

   marca?: string
}