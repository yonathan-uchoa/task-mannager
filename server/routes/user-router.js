const Joi = require("joi");
const BaseRoute = require("./base/baseRoute");

class UserRoutes extends BaseRoute {
  constructor(db) {
    super();
    this.db = db;
  }

  list() {
    return {
      method: "GET",
      path: "/user",      
      options: {
        tags: ["api"],
        description: "list of users",
        notes: " return all users from database",
        auth: false,
      },
      handler: (request, headers) => {
        return this.db.read();
      },
    };
  }
  create() {
    return {
      method: "POST",
      path: "/user",      
      handler: (request, headers) => {
        const payload = request.payload;
        return this.db.create(payload);
      },
      options: {
        tags: ["api"],
        description: "register a new user",
        notes: 'Returns a todo item by the id passed in the path',
        auth: false,
        validate: {
          // failAction: (request, h, err) => {
          //   throw err;
          // },
          payload: Joi.object({
            name: Joi.string().max(99).required(),
            password: Joi.string().max(33).required(),
          }),
        },
      },
      
    };
  }
  update() {
    return {
      method: "PATCH",
      path: "/user/{id}",
      handler: (request, headers) => {
        const payload = request.payload;
        return this.db.create(payload);
      },
      options: {
        tags: ["api"],
        description: "update a user",
        notes: 'Returns a todo item by the id passed in the path',
        auth: false,
        validate: {
          // failAction: (request, h, err) => {
          //   throw err;
          // },
          params: Joi.object({
            id: Joi.string().required(),
          }),
          payload: Joi.object({
            name: Joi.string().max(99),
            password: Joi.string().max(33),
          }),
        },
      },
    };
  }
  delete() {
    return {
      method: "DELETE",
      path: "/user/{id}",      
      handler: (request, headers) => {
        const { id } = request.params;
        return this.db.delete(+id);
      },
      options: {
        tags: ["api"],
        description: "delete a user by id",
        notes: 'Returns a todo item by the id passed in the path',
        auth: false,
        validate: {
          // failAciont: (request, h, err) => {
          //   throw err;
          // },
          params: Joi.object({
            id: Joi.string().required(),
          }),
        },
      },      
    };
  }
}

module.exports = UserRoutes;
