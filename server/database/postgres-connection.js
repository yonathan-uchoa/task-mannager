require("dotenv").config();
const Sequelize = require("sequelize");
const ContextStrategy = require("./contextStrategy");

const DB = process.env.PG_DB || "taskmannager";
const USER = process.env.PG_USER || "taskmannager";
const PASSWORD = process.env.PG_PASSWORD || "password";
const HOST = process.env.PG_HOST || "localhost";
class PostgreSQL extends ContextStrategy {
  constructor(connection, schema) {
    super();
    this._db = schema;
    this._connection = connection;
  }

  static async defineModel(connection, schema) {
    const model = connection.define(schema.name, schema.schema, schema.options);
    await model.sync({alter: true});
    return model;
  }

  static async connect() {
    const sequelize = new Sequelize(DB, USER, PASSWORD, {
      host: HOST,
      dialect: "postgres",
      logging: 0,
      quoteIndentifiers: 0,
      operatorsAliases: 0,
    });

    return sequelize;
  }

  async isConnected() {
    try {
      // await this._connect();
      await this._connection.authenticate();
      return true;
    } catch (error) {
      console.error("fail!", error);
      return false;
    }
  }

  create(item) {
    return this._db.create(item, {
      raw: true,
    });
  }

  read(item) {
    return this._db.findAll({
      where: item,
      raw: true,
    });
  }

  update(id, item) {
    return this._db.update(item, {
      where: {
        id,
      },
    });
  }
  delete(id) {
    const query = id
      ? {
          id,
        }
      : {};
    return this._db.destroy({
      where: query,
    });
  }
}

module.exports = PostgreSQL;
