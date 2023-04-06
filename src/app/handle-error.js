const errorTypes = require("../constants/error-types");

const handleError = (error, ctx) => {
  let code = 0;
  let message = "";
  switch (error.message) {
    case errorTypes.USER_NAME_AND_PASSWORD_REQUIRED: {
      code = 400;
      message = "用户名或者密码为空";
      break;
    }
    case errorTypes.USER_ALREADY_EXISTS: {
      code = 409;
      message = "用户名已经存在";
      break;
    }
    case errorTypes.USER_NOT_EXISTS: {
      code = 409;
      message = "用户不存在";
      break;
    }
    case errorTypes.USERNAME_OR_PASSWORD_ERROR: {
      code = 400;
      message = "用户名或者密码错误";
      break;
    }
    case errorTypes.TOKEN_EXPIRED: {
      code = 400;
      message = "无效的 Token";
      break;
    }
    case errorTypes.PARAMS_INVALID: {
      code = 400;
      message = "非法参数";
      break;
    }
    default: {
      code = 500;
      message = "服务器内部错误";
      break;
    }
  }

  ctx.fail(message, code);
};

module.exports = handleError;
