const Router = require("koa-router");
const userController = require("../controller/user.controller");
const { verifyUser } = require("../middleware/user.middleware");

const userRouter = new Router({ prefix: "/user" });

userRouter.post("/", verifyUser, userController.create);
userRouter.allowedMethods();

module.exports = userRouter;
