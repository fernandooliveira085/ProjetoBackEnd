const express = require("express");
const swaggerUi = require('swagger-ui-express'); 
const swaggerJsdoc = require('swagger-jsdoc');  

const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();




const options = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'API do Projeto Back-end', 
      version: '1.0.0',
      description: 'Documentação da API para o projeto final do curso de back-end.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de Desenvolvimento'
      }
    ],
    
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ],
  },
  
  apis: ['./src/routes/*.js'], 
};


const specs = swaggerJsdoc(options);



app.use(express.json());


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(userRoutes);
app.use(authRoutes);

module.exports = app;
