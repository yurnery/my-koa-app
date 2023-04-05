const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const response = require("../middleware/response.middleware");
const userRouter = require("../router/user.router");
const authRouter = require("../router/auth.router");
const handleError = require("./handle-error");

const app = new Koa();
// 常用中间件
app.use(bodyParser());
app.use(response());

// 注册路由中间件
app.use(userRouter.routes());
app.use(authRouter.routes());

// 错误处理
app.on("error", handleError);

module.exports = app;
