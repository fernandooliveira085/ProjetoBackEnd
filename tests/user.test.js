const request = require("supertest");
const app = require("../src/app");
const { sequelize } = require("../src/models");

let token;

beforeAll(async () => {
  process.env.NODE_ENV = "test";
  await sequelize.sync({ force: true });

  await request(app)
    .post("/users")
    .send({
      name: "Admin",
      email: "admin@test.com",
      password: "123456",
    });


  const login = await request(app)
    .post("/login")
    .send({
      email: "admin@test.com",
      password: "123456",
    });

  token = login.body.token;
});

afterAll(async () => {
  await sequelize.close();
});
it("teste dummy", () => {
  expect(true).toBe(true);
});
