const express = require("express");
const {
    handleGetLogin,
    handleLogin,
} = require("../controllers/loginController");

const loginRouter = express.Router();

loginRouter.route("/")
    .get(handleGetLogin)
    .post(handleLogin); // Handle login with JWT

module.exports = loginRouter;
