
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
        Task.secondTask.id_user = id_user;
    });
    it('should create a Task', async () => {        
        const {dataValues: result} = await TaskController.create(Task.default);
        id_task = result.id_task;
        delete result.id_task;
        expect(result).to.deep.include(Task.default);        
    });
    it('should create a second Task', async () => {        
        const {dataValues: result} = await TaskController.create(Task.secondTask);
        delete result.id_task;
        expect(result).to.deep.include(Task.secondTask);        
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
    it('should get all task by id_user order by date_end ASC', async () => {
        // find all task by id_user ordered by date_end ASC (default)
        const [{dataValues: firstTask}, {dataValues: secondTask} ] = await TaskController.findAllFilter({id_user, deleted: false});
        expect(firstTask).to.deep.include(Task.secondTask);
        expect(secondTask).to.deep.include(Task.modified);
    });
    it('should get all task by id_user and status: true', async () => {
        // find all task by id_user filtered by status: true
        const [{ dataValues: result }] = await TaskController.findAllFilter({id_user, status: true, deleted: false});
        expect(result).to.deep.include(Task.modified);
        expect(result).to.not.deep.include(Task.default);
    });
    it('should get all task by id_user and status: false', async () => {
        // find all task by id_user filtered by status: false
        const [{ dataValues: result }] = await TaskController.findAllFilter({id_user, status: false, deleted: false});
        expect(result).to.deep.include(Task.secondTask);
        expect(result).to.not.deep.include(Task.modified);
    });
    it('should set task to deleted', async () => {
        // should set a task to deleted:true
        const result = await TaskController.update(id_task, {deleted: true});
        expect(result).to.have.members([1]);
    });
    it('should get all task by id_user and return only the second task', async () => {
        // should return only the second task, because the first one has been set to deleted.
        const result = await TaskController.findAllFilter({id_user, deleted: false});
        result.forEach(data => {
            expect(data.dataValues).to.deep.not.includes(Task.modified);
        });
        expect(result[0].dataValues).to.deep.includes(Task.secondTask);
    });
    it('should delete a task', async () => {
        // should delete a task from DB
        const result = await TaskController.delete(id_task);
        expect(result).to.equal(1);
    });
    
});