const express = require("express");

const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(authRoutes);

module.exports = app;
