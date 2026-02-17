const { User } = require('../models');
const jwt = require("jsonwebtoken");

module.exports = {
  async login(req, res) {
    try {
      const { email, password } = req.body;

     
      if (!email || !password) {
        return res.status(400).json({ error: "Email e senha são obrigatórios" });
      }

     
      const user = await User.findOne({ where: { email } });

      if (!user) {
       
        return res.status(401).json({ error: "Credenciais inválidas" });
      }

      
      const passwordMatch = await user.checkPassword(password);

      if (!passwordMatch) {
        return res.status(401).json({ error: "Credenciais inválidas" });
      }

      
      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || "1d" } // Boa prática: usar o .env
      );

     
      return res.status(200).json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });

    } catch (error) {
      console.error("Erro no login:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
};
