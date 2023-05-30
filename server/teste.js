const UserController = require("./controller/user-controller");
const Models = require("./models");



(async () => {
    await Models.sequelize.sync({force: true}).then(console.log("conectado!"));
    UserController.findAll().then(res => console.log(JSON.stringify(res)));

})();