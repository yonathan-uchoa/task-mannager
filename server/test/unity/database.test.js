const ContextStrategy = require("../../database/contextStrategy");
const PostgreSQL = require("../../database/postgres-connection");
const Models = require("../../models");
const MockUser = require("../mock/user");

describe("PostgreSQL", () => {
  const models = {};
  const context = {};
  let id_user;
  beforeAll(async () => {
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
  });
  describe("User case", () => {
    it("should create a user", async () => {
      const { dataValues: response } = await context["User"].create(
        MockUser.default
      );
      id_user = response.id;
      expect(response).toMatchObject(MockUser.default);
    });
    it("should find a user", async () => {
      const response = await context["User"].read(id_user);
      expect(response).toMatchObject([MockUser.default]);
    });
    it("should update a user", async () => {
      let response = await context["User"].update(id_user, MockUser.modified);
      expect(response).toStrictEqual([1]);
      response = await context["User"].read(id_user);
      expect(response).toMatchObject([MockUser.modified]);
    });
  });
});
