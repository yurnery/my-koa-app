const errorTypes = require("../constants/error-types");
const userService = require("../service/user.service");

const verifyUser = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  if (!name || !password) {
    const error = new Error(errorTypes.USER_NAME_AND_PASSWORD_REQUIRED);
    ctx.app.emit("error", error, ctx);
    return;
  }

  const user = await userService.getUserByName(name);
  if (user) {
    const error = new Error(errorTypes.USER_ALREADY_EXISTS);
    ctx.app.emit("error", error, ctx);
    return;
  }

  await next();
};

module.exports = {
  verifyUser,
};
