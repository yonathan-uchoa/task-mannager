const sequelize = require("../database/postgres-connection");
const Task = require("./tasks");
const User = require("./users");

User.hasMany(Task, { foreignKey: 'id_user' });
Task.belongsTo(User, { foreignKey: 'id_user' });

module.exports = {User, Task, sequelize};