const routes = require("express").Router();

const AuthController = require("./Controllers/AuthController");

routes.post("/auth", AuthController.Encode);
routes.post("/auth/decode", AuthController.Decode);

module.exports = routes;
