import { Column, DataType, Default, Model, PrimaryKey, Table } from "sequelize-typescript";
import { CreateUserDto } from "./dtos/create-user.dto";


@Table({
    tableName: "user",
    timestamps: true
})
export class User extends Model<User, CreateUserDto> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    public user_id: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
    })
    number: number

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    username: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string


    @Default(true)
    @Column({
        type: DataType.BOOLEAN,
    })
    active: boolean
}