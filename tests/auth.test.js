const request = require("supertest");
const app = require("../src/app");
const { sequelize } = require("../src/models");
process.env.JWT_SECRET = "testsecret";

describe("Autenticação", () => {

  beforeAll(async () => {
    await sequelize.sync({ force: true });

    await request(app)
      .post("/users")
      .send({
        name: "Auth Test",
        email: "auth@test.com",
        password: "123456",
      });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("deve autenticar o usuário e retornar um token", async () => {
    const response = await request(app)
      .post("/login")
      .send({
        email: "auth@test.com",
        password: "123456",
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  it("não deve autenticar com senha incorreta", async () => {
    const response = await request(app)
      .post("/login")
      .send({
        email: "auth@test.com",
        password: "errada",
      });

    expect(response.status).toBe(401);
  });

  it("não deve acessar rota protegida sem token", async () => {
    const response = await request(app)
      .get("/users");

    expect(response.status).toBe(401);
  });

  it("deve acessar rota protegida com token válido", async () => {
    const login = await request(app)
      .post("/login")
      .send({
        email: "auth@test.com",
        password: "123456",
      });

    const token = login.body.token;

    const response = await request(app)
      .get("/users")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
  });

});
