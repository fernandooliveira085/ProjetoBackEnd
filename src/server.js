require('dotenv').config();
const app = require("./app");



app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
  console.log("Conexão com o banco de dados gerenciada pelas migrations.");
});
