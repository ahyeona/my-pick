import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import User from "./User";

class Token extends Model {
    public id!: number;
    public user_id!: number;
    public refresh_token!: string;
}

Token.init(
    {
        id : {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            primaryKey : true
        },
        user_id : {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique : true
        },
        refresh_token : {
            type: DataTypes.STRING(500),
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName : "Token",
        tableName : "tokens",
        timestamps : true
    }
)

Token.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
  onDelete: "CASCADE",
});

export default Token;