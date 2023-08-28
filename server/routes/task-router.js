const Joi = require("joi");
const BaseRoute = require("./base/baseRoute");

class TaskRoute extends BaseRoute {
  constructor(db) {
    super();
    this.db = db;
  }
  list() {
    return {
      method: "GET",
      path: "/task",
      options: {
        tags: ["api"],
        description: "list of tasks",
        notes: "return all tasks from from database",
        auth: false,
        validate: {
          query: Joi.object({
            id_user: Joi.string(),
            status: Joi.bool().default(true),
            deleted: Joi.bool().default(false),
          }),
        },
        handler: (request, headers) => {
          return this.db.read();
        },
        
      },
      
    };
  }
  create() {
    return {
      method: "POST",
      path: "/task",
      handler: (request, headers) => {
        const payload = request.payload;
        return this.db.create(payload);
      },
      options: {
        tags: ["api"],
        description: "register a new task",
        notes: "Returns a todo item by the id passed in the path",
        auth: false,
        validate: {
          // failAction: (request, h, err) => {
          //   throw err;
          // },
          payload: Joi.object({
            id_user: Joi.number().required(),
            title: Joi.string().max(100).required().default('new task'),
            description: Joi.string().max(255),
            status: Joi.boolean().required().default(false),
            date_creation: Joi.date().default(Date.now()),
            date_end: Joi.date().default(null),
            deleted: Joi.boolean().required().default(false),
          }),
        },
      },
    };
  }
  update() {
    return {
      method: "PATCH",
      path: "/task/{id}",
      handler: (request, headers) => {
        const payload = request.payload;
        return this.db.create(payload);
      },
      options: {
        tags: ["api"],
        description: "update a user",
        notes: "Returns a todo item by the id passed in the path",
        auth: false,
        validate: {
          // failAction: (request, h, err) => {
          //   throw err;
          // },
          params: Joi.object({
            id: Joi.string().required(),
          }),
          payload: Joi.object({
            title: Joi.string().max(100),
            description: Joi.string().max(255),
            status: Joi.boolean(),
            date_creation: Joi.date(),
            date_end: Joi.date(),
            deleted: Joi.boolean(),
          }),
        },
      },
    };
  }
  delete() {
    return {
      method: "DELETE",
      path: "/task/{id}",
      handler: (request, headers) => {
        const { id } = request.params;
        return this.db.delete(+id);
      },
      options: {
        tags: ["api"],
        description: "delete a task by id",
        notes: "Returns a todo item by the id passed in the path",
        auth: false,
        validate: {
          // failAciont: (request, h, err) => {
          //   throw err;
          // },
          params: Joi.object({
            id: Joi.string().required(),
            id_user: Joi.string().required()
          }),
        },
      },
    };
  }
}

module.exports = TaskRoute;
