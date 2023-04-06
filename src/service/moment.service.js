const connections = require("../app/database");

class MomentService {
  async create(content, userId) {
    const statement = "INSERT INTO moments (content, user_id) VALUES (?,?);";
    const result = await connections.execute(statement, [content, userId]);
    return result[0];
  }

  async list(offset, limit) {
    const statement = `
  SELECT 
    m.id id, 
    m.content content,
    m.create_at createAt,
    m.update_at updateAt,
    JSON_OBJECT("id", u.id, "name", u.name) author,
    (SELECT COUNT(*) FROM comments c WHERE c.moment_id = m.id) commentCount
  FROM moments m LEFT JOIN users u ON m.user_id = u.id
  LIMIT ? OFFSET ?;`;
    const results = await connections.query(statement, [limit, offset]);
    return results[0];
  }

  async detail(id) {
    const statement = `
  SELECT 
    m.id id,
    m.content content,
    m.create_at createAt,
    m.update_at updateAt,
    JSON_OBJECT("id", u.id, "name", u.name) author,
    (SELECT COUNT(*) FROM comments c WHERE c.moment_id = m.id) commentCount
  FROM moments m 
  LEFT JOIN users u ON m.user_id = u.id
  WHERE m.id = ?;
    `;
    const results = await connections.query(statement, [id]);
    return results[0];
  }
}

module.exports = new MomentService();
