const TaskI = require('../interfaces/task-interface');
const { Task } = require('../models');


class TaskController {
    static async findAllByUser(id_user){
        return Task.findAll({
            where: { id_user, raw: true }
        });
    }
    static async create(task) {
        return Task.create(task, { raw: true });
    }
    static async update(id_task, task) {
        return Task.update(task, { raw: true });
    }
    static async delete(id_task) {
        const query = id ? {
            id_task: id
          } : {};
        return Task.destroy({ where: query });
    }
    static async get(id_task) {
        return Task.findByPk(id, { raw: true })
    }
    static async findAll() {
        return Task.findAll({ raw: true });
    }
}

module.exports = TaskController;