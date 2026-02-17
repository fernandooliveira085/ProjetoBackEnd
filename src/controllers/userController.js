const { User } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
  
  async create(req, res) {
    try {
      const { name, email, password } = req.body;
      const password_hash = await bcrypt.hash(password, 8);

      const user = await User.create({
        name,
        email,
        password_hash,
      });

      user.password_hash = undefined;
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao criar usuário", details: error.message });
    }
  },

 
  async list(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt']
      });
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

 
  async findById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, {
        attributes: ['id', 'name', 'email']
      });
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  
  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body; 

      const [updated] = await User.update({ name, email }, { where: { id: id } });

      if (!updated) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
      
      const updatedUser = await User.findByPk(id, { attributes: ['id', 'name', 'email'] });
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await User.destroy({ where: { id: id } });

      if (!deleted) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
};
