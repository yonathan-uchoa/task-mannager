const associations = async (schemas) => {
  schemas["User"].hasMany(schemas["Task"], { foreignKey: "id", as: "id_user" }); // user/task association
  await schemas["Task"].sync({ alter: true }); // sync tasks table to inser association
};

module.exports = {
  schemas: {
    User: require("./users-model"),
    Task: require("./tasks-model"),
  },
  associations,
};
