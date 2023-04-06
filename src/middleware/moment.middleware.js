const { PARAMS_INVALID } = require("../constants/error-types");

const verifyListQuery = async (ctx, next) => {
  const { index, size } = ctx.request.query;

  if (isNaN(+index) || isNaN(+size) || +index < 1 || +size < 0) {
    const error = new Error(PARAMS_INVALID);
    ctx.app.emit("error", error, ctx);
    return;
  }

  await next();
};

const verifyDetailQuery = async (ctx, next) => {
  const { momentId } = ctx.request.params;
  if (isNaN(+momentId)) {
    const error = new Error(PARAMS_INVALID);
    ctx.app.emit("error", error, ctx);
    return;
  }

  await next();
};

module.exports = {
  verifyListQuery,
  verifyDetailQuery,
};
