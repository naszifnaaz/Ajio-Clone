const express = require("express");
const app = express();
app.use(express.json());
const userController = require("./controllers/user.controller")
const cors = require("cors");
const {register,login} = require("./controllers/auth.controller")
app.use(cors());

const productController = require("./controllers/product.controller");
app.use("/products", productController);

app.use("/users", userController)

app.post("/register", register)

app.post("/login", login)

module.exports = app;
