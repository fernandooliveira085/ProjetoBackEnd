# Projeto Final de Back-end - API de Gerenciamento

API RESTful desenvolvida como projeto final para o curso de desenvolvimento back-end da Digital College. A aplicação permite o gerenciamento completo de usuários, incluindo autenticação baseada em JWT.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

*   **[Node.js](https://nodejs.org/en/ )**: Ambiente de execução para o JavaScript no servidor.
*   **[Express.js](https://expressjs.com/pt-br/ )**: Framework para a construção da API REST.
*   **[Sequelize](https://sequelize.org/ )**: ORM (Object-Relational Mapper) para interagir com o banco de dados de forma moderna.
*   **[MySQL](https://www.mysql.com/ )**: Banco de dados relacional para armazenamento dos dados.
*   **[JSON Web Tokens (JWT)](https://jwt.io/ )**: Para criação de tokens de autenticação e proteção de rotas.
*   **[Bcrypt.js](https://github.com/kelektiv/bcrypt.js )**: Para criptografia de senhas.
*   **[Swagger](https://swagger.io/ )**: Para documentação interativa da API.
*   **[Dotenv](https://github.com/motdotla/dotenv )**: Para gerenciamento de variáveis de ambiente.

---

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
*   [Git](https://git-scm.com )
*   [Node.js](https://nodejs.org/en/ )
*   Um gerenciador de pacotes como [NPM](https://www.npmjs.com/ ) ou [Yarn](https://yarnpkg.com/ )
*   Um banco de dados **MySQL** rodando na sua máquina.

---

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para configurar e executar a aplicação em seu ambiente local.

```bash
# 1. Clone este repositório
$ git clone https://github.com/fernandooliveira085/ProjetoBackEnd.git

# 2. Acesse a pasta do projeto no terminal/cmd
$ cd ProjetoBackEnd

# 3. Instale as dependências
$ npm install

# 4. Crie um arquivo .env na raiz do projeto
# Preencha com suas credenciais do banco de dados e segredos do JWT.
# Use o arquivo .env.example como base.
```

#### **Arquivo `.env`**
Crie um arquivo chamado `.env` na raiz do projeto e adicione as seguintes variáveis, substituindo pelos seus valores:

```env
# Configurações do Servidor
PORT=3000

# Configurações do Banco de Dados (MySQL )
DB_HOST=127.0.0.1
DB_USER=root
DB_PASS=sua_senha_do_mysql
DB_NAME=projeto_backend
DB_DIALECT=mysql

# Configurações do JSON Web Token (JWT)
JWT_SECRET=seu_segredo_super_secreto_aqui
JWT_EXPIRES_IN=1d
```

```bash
# 5. Rode as migrations para criar as tabelas no banco de dados
# Este comando irá criar a estrutura do banco de dados automaticamente.
$ npx sequelize-cli db:migrate

# 6. Inicie o servidor
# O servidor estará rodando em http://localhost:3000
$ npm run dev
```

---

## 📖 Documentação da API

Após iniciar o projeto, a documentação completa e interativa da API estará disponível no seu navegador através do Swagger.

Acesse: **[http://localhost:3000/api-docs](http://localhost:3000/api-docs )**

Na documentação, você pode:
*   Visualizar todos os endpoints disponíveis.
*   Ver os detalhes de cada rota (parâmetros, corpo da requisição, respostas).
*   Testar os endpoints diretamente pelo navegador (lembre-se de obter um token na rota `/login` e autorizar no Swagger para testar as rotas protegidas).

---

## 👨‍💻 Autor

*   **Fernando Oliveira**
*   GitHub: [@fernandooliveira085](https://github.com/fernandooliveira085 )

---
