const { DataTypes } = require("sequelize");

const TaskSchema = {
  name: "Task",
  schema: {
    id_task: {
      type: DataTypes.INTEGER,
      required: true,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(50),
      required: true,
    },
    description: {
      type: DataTypes.TEXT,
      required: false,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    date_creation: {
      type: DataTypes.DATE,
      required: true,
    },
    date_end: {
      type: DataTypes.DATE,
      required: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      required: true,
      defaultValue: false,
    },
  },
  options: {
    freezeTableName: 0,
    timestamps: 0,
    tableName: "tasks",
  },
};

module.exports = TaskSchema;
