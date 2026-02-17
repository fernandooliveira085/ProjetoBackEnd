const express = require("express");
const UserController = require("../controllers/UserController");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

// rota pública
router.post("/users", UserController.create);

// rotas protegidas
router.get("/users", authMiddleware, UserController.list);
router.get("/users/:id", authMiddleware, UserController.findById);
router.put("/users/:id", authMiddleware, UserController.update);
router.delete("/users/:id", authMiddleware, UserController.delete);

module.exports = router;
