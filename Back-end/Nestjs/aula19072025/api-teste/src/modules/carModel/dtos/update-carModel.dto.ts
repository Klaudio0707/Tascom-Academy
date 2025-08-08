import { PartialType } from "@nestjs/mapped-types";
import { CreateCarModelDto } from "./create-carModel.dto";


export class UpdateCarModelDto extends PartialType(CreateCarModelDto) {}