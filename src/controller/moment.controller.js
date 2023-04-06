const momentService = require("../service/moment.service");

class MomentController {
  async create(ctx, next) {
    const { content } = ctx.request.body;
    const userId = ctx.user.id;
    const result = await momentService.create(content, userId);
    ctx.success(result);
  }

  async list(ctx, next) {
    let { index, size } = ctx.request.query;
    const result = await momentService.list((+index - 1) * size, +size);
    ctx.success(result);
  }

  async detail(ctx, next) {
    let { momentId } = ctx.request.params;
    const result = await momentService.detail(+momentId);
    ctx.success(result);
  }
}

module.exports = new MomentController();
