import {  Column, DataType, Default, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({
        tableName: "vehicle",
        timestamps:true
    })
export class vehicle extends Model<vehicle> {
        @PrimaryKey
        @Default(DataType.UUIDV4)
        @Column(DataType.UUID)
        public vehicle_id: string
    
        @Column({
            type: DataType.STRING,
            allowNull: false
        })
        placa: string
        
        @Column({
            type: DataType.STRING,
            allowNull: false
        })
        cor: string
        
        @Column({
            type: DataType.INTEGER,
            allowNull: false
        })
        ano_fabricacao: number
        
        @Column({
            type: DataType.INTEGER,
            allowNull: false
        })
        quilometragem: number       
    }
