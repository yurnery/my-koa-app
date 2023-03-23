const userService = require("../service/user.service");

class UserController {
  async create(ctx, next) {
    const user = ctx.request.body;
    const result = await userService.create(user);
    ctx.success(result);
  }
}

module.exports = new UserController();
