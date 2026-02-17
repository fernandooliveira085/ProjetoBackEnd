const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    firstname: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 8);
  });

  return User;
};
