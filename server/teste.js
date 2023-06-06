const ContextStrategy = require("./database/contextStrategy");
const PostgreSQL = require("./database/postgres-connection");
const Models = require("./models");

(async () => {
  const connection = await PostgreSQL.connect();
  const models = {};
  await Promise.all(
    Object.keys(Models.schemas).map(async (key) => {
      models[key] = await PostgreSQL.defineModel(
        connection,
        Models.schemas[key]
      );
    })
  );
  await Models.associations(models);
  const context = new ContextStrategy(new PostgreSQL(connection, models));
  console.log(context);
})();
