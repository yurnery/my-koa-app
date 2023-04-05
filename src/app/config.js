const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;

const readKey = (fp) => {
  return fs.readFileSync(path.resolve(__dirname, fp), "utf-8");
};

const PRIVATE_KEY = readKey("./keys/private.key");
const PUBLIC_KEY = readKey("./keys/public.key");

module.exports = {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  PRIVATE_KEY,
  PUBLIC_KEY,
};
