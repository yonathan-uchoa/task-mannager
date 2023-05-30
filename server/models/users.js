const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/postgres-connection");

class User extends Model {};
User.init(
    {
        id_user: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            required: true
        },
        password: {
            type: DataTypes.STRING(34),
            required: true
        }
    },
    {
        sequelize,
        timestamps: false,
        tableName: 'users'
    }
);

module.exports = User