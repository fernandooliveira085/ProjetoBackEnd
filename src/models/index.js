const { Sequelize } = require("sequelize");
const User = require('./User');
const dbConfig = require('../config/database'); 

const models = [User];

const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env]; 

let sequelize;

if (config.use_env_variable) {
  
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

models.forEach(model => model.init(sequelize));

const db = {
  ...sequelize.models,
  sequelize,
  Sequelize,
};

module.exports = db;
