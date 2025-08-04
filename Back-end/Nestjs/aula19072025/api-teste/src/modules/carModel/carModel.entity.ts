import {  BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { brand } from "../brand/brand.entity";


@Table({
        tableName: "carModel",
        timestamps:true
    })
export class carModel extends Model<carModel> {
        @PrimaryKey
        @Default(DataType.UUIDV4)
        @Column(DataType.UUID)
        public model_id: string
    
        @Column({
            type: DataType.STRING,
            allowNull: false
        })
        model: string
        
        @Column({
            type: DataType.INTEGER,
            allowNull: false
        })
        ano: number
        
        @Column({
            type: DataType.INTEGER,
            allowNull: false
        })
        preco: number
        
        
        @ForeignKey(() => brand)
        @Column({
            type:DataType.UUID,
            allowNull: false
        })
        brand_id: string
       @BelongsTo(() => brand)
       brand: brand
    }
