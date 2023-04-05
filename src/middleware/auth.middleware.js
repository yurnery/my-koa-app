const {
  USER_NAME_AND_PASSWORD_REQUIRED,
  USER_NOT_EXISTS,
  USERNAME_OR_PASSWORD_ERROR,
} = require("../constants/error-types");
const userService = require("../service/user.service");
const { md5password } = require("../utils/crypto");

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  if (!name || !password) {
    const error = new Error(USER_NAME_AND_PASSWORD_REQUIRED);
    ctx.app.emit("error", error, ctx);
    return;
  }

  const user = (await userService.getUserByName(name))[0];
  if (!user) {
    const error = new Error(USER_NOT_EXISTS);
    ctx.app.emit("error", error, ctx);
    return;
  }

  if (md5password(password) !== user.password) {
    const error = new Error(USERNAME_OR_PASSWORD_ERROR);
    ctx.app.emit("error", error, ctx);
    return;
  }

  ctx.user = user;
  await next();
};

module.exports = { verifyLogin, encryptPassword };
