const express = require("express");
const {
    handlegetsignup,
    handlesignup,
} = require("../controllers/signupController");

const signupRouter = express.Router();

signupRouter.route("/")
    .get(handlegetsignup)
    .post(handlesignup); // Handle signup and potentially return JWT

module.exports = signupRouter;
