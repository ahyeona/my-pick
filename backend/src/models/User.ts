import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import Token from "./Token";

class User extends Model {
    public id!: number;
    public email!: string;
    public password!: string;
}

User.init(
    {
        id : {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            primaryKey : true
        },
        email : {
            type: DataTypes.STRING(100),
            allowNull : false,
            unique : true
        },
        password : {
            type: DataTypes.STRING(200),
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName : "User",
        tableName : "users",
        timestamps : true
    }
)

User.hasMany(Token, {
    foreignKey : "user_id",
    sourceKey: "id",
    onDelete: "CASCADE"
})

export default User;