const { Sequelize } = require("sequelize");

let sequelize;

if (process.env.NODE_ENV === "test") {
  // banco em memória para testes
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
  });
} else {
  // banco real (mysql)
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
      logging: false,
    }
  );
}

module.exports = {
  sequelize,
};
