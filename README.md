# 🚀 Projeto Backend - Autenticação com Node.js

Projeto desenvolvido como parte do curso para praticar a criação de uma API backend com autenticação de usuários utilizando JWT, criptografia de senha e banco de dados com Sequelize.

O sistema permite:

✔ Cadastro de usuários
✔ Login com geração de token JWT
✔ Proteção de rotas autenticadas
✔ Testes automatizados
✔ Organização em arquitetura MVC simples

---

## 📚 Tecnologias Utilizadas

* Node.js
* Express
* Sequelize
* MySQL
* SQLite (para testes)
* JWT (JSON Web Token)
* bcryptjs
* dotenv
* Jest
* Supertest

---

## 📁 Estrutura do Projeto

```
src/
│
├── config/
│   └── database.js
│
├── controllers/
│   ├── AuthController.js
│   └── UserController.js
│
├── middlewares/
│   └── auth.js
│
├── models/
│   ├── index.js
│   └── User.js
│
├── routes/
│   ├── auth.routes.js
│   └── user.routes.js
│
├── tests/
│   ├── auth.test.js
│   └── user.test.js
│
└── app.js
```

---

## ⚙️ Instalação do Projeto

Clone o repositório:

```bash
git clone https://github.com/fernandooliveira085/ProjetoBackEnd.git
```

Entre na pasta:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

---

## 🔐 Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto:

```
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
DB_NAME=nome_do_banco

JWT_SECRET=seu_token_super_secreto
NODE_ENV=development
```

---

## 🗄 Configuração do Banco de Dados

Certifique-se que o MySQL esteja rodando e que o banco configurado no `.env` exista.

Se estiver usando Sequelize CLI, rode as migrations se necessário.

---

## ▶️ Executar o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

Modo normal:

```bash
npm start
```

Servidor rodará em:

```
http://localhost:3000
```

---

## 🧪 Executar Testes

```bash
npm test
```

Durante os testes o projeto utiliza SQLite em memória automaticamente.

---

## 🔑 Autenticação

A autenticação é feita com JWT.

Após o login, o token deve ser enviado no header:

```
Authorization: Bearer SEU_TOKEN
```

---

## 📌 Rotas da API

### 🔐 Autenticação

#### Login

```
POST /login
```

Body:

```json
{
  "email": "usuario@email.com",
  "password": "123456"
}
```

Resposta:

```json
{
  "token": "jwt_token",
  "user": {
    "id": 1,
    "name": "Nome",
    "email": "email"
  }
}
```

---

### 👤 Usuários

#### Criar usuário

```
POST /users
```

#### Listar usuários (protegida)

```
GET /users
```

Requer token JWT.

---

## 🛡 Middleware de Autenticação

Valida:

✔ Presença do token
✔ Token válido
✔ Usuário autenticado

Se inválido:

```
401 - Não autorizado
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido para aprender:

* Estruturação de API REST
* Autenticação com JWT
* Criptografia de senha
* Uso do Sequelize
* Organização MVC
* Testes automatizados
* Middleware de autenticação

---

## 👨‍💻 Autor

Fernando Oliveira

GitHub: @fernandooliveira085


---

## 📄 Licença

Este projeto é apenas para estudo e prática.
