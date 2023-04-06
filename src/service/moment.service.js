const connections = require("../app/database");

class MomentService {
  async create(content, userId) {
    const statement = "INSERT INTO moments (content, user_id) VALUES (?,?);";
    const result = await connections.execute(statement, [content, userId]);
    return result[0];
  }
}

module.exports = new MomentService();
