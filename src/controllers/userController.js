const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async create(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ message: "Dados obrigatórios faltando" });
      }

      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(409).json({ message: "Usuário já existe" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar usuário" });
    }
  },

  async list(req, res) {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    return res.json(users);
  },

  async findById(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    return res.json(user);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    await user.update({ name, email });
    return res.json(user);
  },

  async delete(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    await user.destroy();
    return res.status(204).send();
  },
};
