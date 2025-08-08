import { BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "../user/user.entity";
import { CarModel } from "../carModel/carModel.entity";


@Table({
    tableName: "vehicle",
    timestamps: true
})
export class Vehicle extends Model<Vehicle> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    declare vehicle_id: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare placa: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare cor: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare ano_fabricacao: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare quilometragem: number

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare user_id: string
    @BelongsTo(() => User)
    declare user: User

    @ForeignKey(() => CarModel)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare model_id: string
    @BelongsTo(() => CarModel)
    declare carMode: CarModel
}
