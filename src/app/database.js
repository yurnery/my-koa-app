const mysql = require("mysql2/promise");
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = require("./config");

const connections = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
});

async function testConnect() {
  try {
    const conn = await connections.getConnection();
    conn.connect();
    console.log("🚀🚀🚀: 数据库连接成功");
  } catch (error) {
    console.log("❌❌❌: 数据库连接失败");
  }
}

testConnect();

module.exports = connections;
