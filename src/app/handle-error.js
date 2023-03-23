const errorTypes = require("../constants/error-types");

const handleError = (error, ctx) => {
  let status = 0;
  let message = "";
  switch (error.message) {
    case errorTypes.USER_NAME_AND_PASSWORD_REQUIRED: {
      status = 400;
      message = "用户名或者密码为空";
      break;
    }
    case errorTypes.USER_ALREADY_EXISTS: {
      status = 409;
      message = "用户名已经存在";
      break;
    }
    default: {
      status = 500;
      message = "服务器内部错误";
      break;
    }
  }

  ctx.status = status;
  ctx.body = message;
};

module.exports = handleError;
