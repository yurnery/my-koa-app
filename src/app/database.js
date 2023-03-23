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

connections.getConnection((err, conn) => {
  if (err) {
    console.log("❌❌❌: 数据库连接失败");
    return;
  }

  conn.connect((err) => {
    if (err) {
      console.log("❌❌❌: 数据库连接失败");
      return;
    }
    console.log("🚀🚀🚀: 数据库连接成功");
  });
});

module.exports = connections;
