const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");

const Models = require("./models");
const UserRoute = require("./routes/user-router");
const ContextStrategy = require("./database/contextStrategy");
const PostgreSQL = require("./database/postgres-connection");
const TaskRoute = require("./routes/task-router");

const swaggerConfig = {
  info: {
    title: "#Task Mannager API",
    version: "v1.0",
  },
};

var app = new Hapi.Server({
  port: 5000,
});

function mapRoutes(instance, methods) {
  return methods.map((method) => instance[method]());
}

async function main() {
  const models = {};
  const context = {};

  const connection = await PostgreSQL.connect();
  await Promise.all(
    Object.keys(Models.schemas).map(async (key) => {
      models[key] = await PostgreSQL.defineModel(
        connection,
        Models.schemas[key]
      );
    })
  );
  await Models.associations(models);

  Object.keys(models).forEach(
    (key) =>
      (context[key] = new ContextStrategy(
        new PostgreSQL(connection, models[key])
      ))
  );

  await app.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerConfig,
    },
  ]);

  const teste = [
    ...mapRoutes(new UserRoute(context["User"]), UserRoute.methods()),
    ...mapRoutes(new TaskRoute(context["Task"]), TaskRoute.methods()),
  ];

  app.route(teste);
  app.start().then(console.log("server start on port 5000!"));
}
module.exports = main();
