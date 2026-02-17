// Em seu arquivo de configuração de banco de dados (ex: config/database.js)

require('dotenv').config(); // Carrega as variáveis de ambiente
const { Sequelize } = require('sequelize');

// Cria a instância do Sequelize usando as variáveis do arquivo .env
const sequelize = new Sequelize(
  process.env.DB_NAME,    // Nome do banco
  process.env.DB_USER,    // Usuário
  process.env.DB_PASS,    // Senha
  {
    host: process.env.DB_HOST,      // Host
    dialect: process.env.DB_DIALECT,  // Dialeto (mysql)
    logging: false
  }
);

// Exporta a instância CORRETA e configurada
module.exports = sequelize;
