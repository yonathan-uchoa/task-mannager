const UserI = require("../interfaces/user-interface");
const { User } = require("../models");

class UserController {
    static async get(id_user) {
        return User.findByPk(id_user, {raw: true});
    }
    static async create(user) {
        return User.create(user, { raw: true });
    }
    static async findAll() {
        return User.findAll();
    }
    static async update(id_user, user) {
        return User.update(user, {
            where: {
                id_user
            }
        })
    }
    static async delete(id_user){
        const query = id_user ? {
            id_user
        } : {};
        return User.destroy({
            where: query
        });
    }
}

module.exports = UserController;