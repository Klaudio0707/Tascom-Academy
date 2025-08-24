import { BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Brand } from "../brand/brand.entity";
import { CreateCarModelDto } from "./dtos/create-carModel.dto";


@Table({
    tableName: "carModel",
    timestamps: true
})
export class CarModel extends Model<CarModel, CreateCarModelDto> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    declare model_id: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare model: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare ano: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare preco: number


    @ForeignKey(() => Brand)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare brand_id: string
    @BelongsTo(() => Brand)
    declare brand: Brand
}
