const { DataTypes } = require("sequelize");

const UserSchema = {
  name: "User",
  schema: {
    id: {
      type: DataTypes.INTEGER,
      required: true,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      required: true,
    },
    password: {
      type: DataTypes.STRING(34),
      required: true,
    },
  },
  options: {
    freezeTableName: 0,
    timestamps: 0,
    tableName: "users",
  },
};

module.exports = UserSchema;
