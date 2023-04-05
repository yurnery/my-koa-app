const Router = require("koa-router");
const { verifyLogin } = require("../middleware/auth.middleware");
const { authController } = require("../controller/auth.controller");

const authRouter = new Router();

authRouter.post("/login", verifyLogin, authController.login);
authRouter.allowedMethods();

module.exports = authRouter;
