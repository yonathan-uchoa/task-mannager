
const { expect } = require('chai')
const TaskController = require('../../controller/task-controller');
const UserController = require('../../controller/user-controller');
const UserMock = require('../mock/user');
const { sequelize } = require('../../models');
const Task = require('../mock/task');


sequelize
describe('TaskController', () => {
    let id_task;
    let id_user;
    before(async () => {
        const con = await sequelize.sync({force: true});
        const { dataValues: result } = await UserController.create(UserMock.default);
        id_user = result.id_user;
        Task.default.id_user = id_user;
    });
    it('should create a Task', async () => {        
        const {dataValues: result} = await TaskController.create(Task.default);
        id_task = result.id_task;
        delete result.id_task;
        expect(result).to.deep.include(Task.default)
    });
    it('should modify a task', async () => {
        // should be able to modify all task information, except data of creation.
        const result = await TaskController.update(1, Task.modified)     
    });
    it('should get a task by id_task', async () => {
        // should return a task by id_task. 
        const result = await TaskController.get(id_task);
        expect(result).to.deep.include(Task.modified);
    });
    it('should get all task by id_user', async () => {
        const [ { dataValues:result }] = await TaskController.findAllByUser(id_user);
        expect(result).to.deep.include(Task.modified);
    });
    it('should get all task', async () => {
        // should find and return all task
        const [{ dataValues: result }] = await TaskController.findAll();
        expect(result).to.deep.include(Task.modified);
        expect(result).to.not.deep.include(Task.default);
    });
    it('should set task to deleted', async () => {
        // should set a task to deleted:true
        const result = await TaskController.update(id_task, {deleted: true});
        expect(result).to.have.members([1]);
    });
    it('should get all task by id_user and return null', async () => {
        const result = await TaskController.findAllByUser(id_user);
        expect(result).to.have.members([]);
    });
    it('should delete a task', async () => {
        // should delete a task from DB
        const result = await TaskController.delete(id_task);
        expect(result).to.equal(1);
    });
    
});