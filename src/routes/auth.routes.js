const express = require("express");
const AuthController = require("../controllers/AuthController");

const routes = express.Router();

routes.post("/login", AuthController.login);
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Autenticação do usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */




module.exports = routes;
