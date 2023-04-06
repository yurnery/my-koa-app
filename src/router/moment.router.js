const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware");
const { create, list, detail } = require("../controller/moment.controller");
const {
  verifyListQuery,
  verifyDetailQuery,
} = require("../middleware/moment.middleware");

const momentRouter = new Router({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, create);
momentRouter.get("/", verifyListQuery, list);
momentRouter.get("/:momentId", verifyDetailQuery, detail);
module.exports = momentRouter;
