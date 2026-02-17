require('dotenv').config();
const app = require("./app");

const { sequelize } = require("./models");

sequelize.sync().then(() => {
  console.log("✅ Banco de dados sincronizado");

  app.listen(3000, () => {
    console.log("🔥 Servidor rodando na porta 3000");
  });
});
