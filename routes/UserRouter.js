
const express = require("express")
const {
    handlegetuser
} = require("../controllers/userController");

const userRouter = express.Router();


userRouter.route("/")
    .get(handlegetuser); // Handle user logout



module.exports = userRouter;


