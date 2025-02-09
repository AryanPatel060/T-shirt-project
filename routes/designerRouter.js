const express = require('express');

const {
    handlegetdesigner
} = require("../controllers/designerController");



const designerRouter = express.Router();

designerRouter.route("/")
    .get(handlegetdesigner); // Handle user logout

module.exports = designerRouter;