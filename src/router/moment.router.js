const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware");
const { momentController } = require("../controller/moment.controller");

const momentRouter = new Router({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, momentController.create);

module.exports = momentRouter;
