const associations = async (schemas) => {
  schemas["User"].hasMany(schemas["Task"], { foreignKey: "id_user" }); // user/task association
  await schemas["Task"].sync({ alter: true }); // sync tasks table to inser association
};

module.exports = {
  schemas: {
    User: require("./users"),
    Task: require("./tasks"),
  },
  associations,
};
