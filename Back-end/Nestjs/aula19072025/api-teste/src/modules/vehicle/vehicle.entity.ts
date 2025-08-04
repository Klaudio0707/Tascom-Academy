import { BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "../user/user.entity";
import { carModel } from "../carModel/carModel.entity";


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
        
        @ForeignKey(() => User)
        @Column({
            type:DataType.UUID,
            allowNull: false
        })
       user_id: string
       @BelongsTo(() => User)
       user: User

       @ForeignKey(() => carModel)
       @Column({
           type:DataType.UUID,
           allowNull: false
       })
       model_id: string
      @BelongsTo(() => carModel)
      carMode: carModel
    }
