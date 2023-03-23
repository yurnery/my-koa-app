const response = (options = {}) => {
  return async function (ctx, next) {
    ctx.success = function (data) {
      ctx.type = options.type || "json";
      ctx.body = {
        success: true,
        data: data,
      };
    };

    ctx.fail = function (message, code) {
      ctx.type = options.type || "json";
      ctx.body = {
        success: false,
        code: code || 500,
        message: message,
      };
    };

    await next();
  };
};

module.exports = response;
