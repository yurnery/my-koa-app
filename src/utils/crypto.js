const CryptoJS = require("crypto-js");

const md5password = (password) => {
  return CryptoJS.MD5(password).toString();
};

module.exports = { md5password };
