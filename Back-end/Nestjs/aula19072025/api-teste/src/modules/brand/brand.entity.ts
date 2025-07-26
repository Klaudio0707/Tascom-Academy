import {  Column, DataType, Default, Model, PrimaryKey, Table } from "sequelize-typescript";



@Table({
    tableName: "brand",
    timestamps:true
})
export class brand extends Model<brand> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    public brand_id: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    marca: string
            
}