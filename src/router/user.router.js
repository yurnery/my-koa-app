const Router = require("koa-router");
const { create } = require("../controller/user.controller");
const {
  verifyUser,
  encryptPassword,
} = require("../middleware/user.middleware");
const userRouter = new Router({ prefix: "/user" });

userRouter.post("/", verifyUser, encryptPassword, create);

module.exports = userRouter;
