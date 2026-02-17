const express = require("express");
const UserController = require("../controllers/UserController");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();


/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "João da Silva"
 *               email:
 *                 type: string
 *                 example: "joao@exemplo.com"
 *               password:
 *                 type: string
 *                 example: "senhaForte123"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: "Erro na requisição (ex: e-mail já existe)"
 */

router.post("/users", UserController.create);



/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *       401:
 *         description: Não autorizado (token inválido ou não fornecido)
 */
router.get("/users", authMiddleware, UserController.list);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Busca um usuário pelo ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Dados do usuário
 *       404:
 *         description: Usuário não encontrado
 */
router.get("/users/:id", authMiddleware, UserController.findById);



module.exports = router;
