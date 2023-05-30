const TaskI = require('../interfaces/task-interface');
const { Task } = require('../models');


class TaskController {
    static async findAllByUser(id_user){
        return Task.findAll({
            where: { id_user, deleted: false }
        });
    }
    static async create(task) {
        return Task.create(task, { raw: true });
    }
    static async update(id_task, task) {
        return Task.update(task, {
            where: {
                id_task
            }
        });
    }
    static async delete(id_task) {
        const query = id_task ? {
            id_task: id_task
          } : {};
        return Task.destroy({ where: query });
    }
    static async get(id_task) {
        return Task.findByPk(id_task, { raw: true })
    }
    static async findAll() {
        return Task.findAll();
    }
}

module.exports = TaskController;