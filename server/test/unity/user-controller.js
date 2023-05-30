const {deepEqual, equal} = require('assert');
const connection = require('../../database/postgres-connection');
const { sequelize } = require('../../models');
const UserController = require('../../controller/user-controller');
const UserMock = require('../mock/user');


describe('UserController', () => {
    let ID;
    before(async() => {
        const con = await sequelize.sync({force: true});
    });
    it('should create a user', async () => {
        const { dataValues: result } = await UserController.create(UserMock.default);
        ID = result.id_user;
        delete result.id_user;
        deepEqual(result, UserMock.default);
    });
    it('should update a user', async () => {
        const result = await UserController.update(ID,UserMock.modified);
        equal(result, 1);
    });
    it('should find a user', async () => {
        const result = await UserController.get(ID);
        delete result.id_user;
        deepEqual(result, UserMock.modified);
    });
    it('should return all', async () => {
        const [{ dataValues: result }] = await UserController.findAll();
        delete result.id_user;
        deepEqual(result, UserMock.modified);
    });
    it('should delete a user', async () => {
        const result = await UserController.delete(ID);
        equal(result, 1);
    });
});