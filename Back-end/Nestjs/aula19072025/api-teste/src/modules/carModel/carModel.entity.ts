import {  Column, DataType, Default, Model, PrimaryKey, Table } from "sequelize-typescript";


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
            type: DataType.STRING,
            allowNull: false
        })
        ano: number
        
        @Column({
            type: DataType.INTEGER,
            allowNull: false
        })
        preco: number        
    }
