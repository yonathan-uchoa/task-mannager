const {deepEqual, equal} = require('assert');
const TaskController = require('../../controller/task-controller');
const UserController = require('../../controller/user-controller');
const UserMock = require('../mock/user');
const { sequelize } = require('../../models');

sequelize
describe('TaskController', () => {
    let id;
    let id_user;
    before(async () => {
        const con = await sequelize.sync({force: true});
        const { dataValues: result } = await UserController.create(UserMock.default);
        id_user = result.id_user;
        console.log(`id user: ${id_user}`)
    })
    it('should create a Task', async () => {
        const task = {
            title: 'titulo',
            description: 'temos uma task!',
            date_creation: Date.now() / 1000,
            id_user
        };
        const {dataValues: result} = await TaskController.create(task);
        console.log(result);
    })
});