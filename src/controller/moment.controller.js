const { momentService } = require("../service/moment.service");

class MomentController {
  async create(ctx, next) {
    const { content } = ctx.request.body;
    const userId = ctx.user.id;
    const result = await momentService.create(content, userId);
    ctx.success(result);
  }
}

const momentController = new MomentController();

module.exports = { momentController };
