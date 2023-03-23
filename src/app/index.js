const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const userRouter = require("../router/user.router");
const handleError = require("./handle-error");

const app = new Koa();
// 常用中间件
app.use(bodyParser());

// 注册路由中间件
app.use(userRouter.routes());

// 错误处理
app.on("error", handleError);

module.exports = app;
