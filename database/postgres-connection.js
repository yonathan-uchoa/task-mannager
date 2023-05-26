require('dotenv').config();
const Sequelize = require('sequelize');

const DB = process.env.PG_DB || 'taskmannager';
const USER = process.env.PG_USER || 'taskmannager'
const PASSWORD = process.env.PG_PASSWORD || 'password';
const HOST = process.env.PG_HOST || 'localhost'


const sequelize = new Sequelize(
    DB,
    USER,
    PASSWORD,
    {
        host: HOST,
        dialect: 'postgres',
        logging: false
    }
);

module.exports = sequelize;