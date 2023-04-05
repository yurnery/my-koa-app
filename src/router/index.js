const fs = require("fs");
const path = require("path");

const useRouters = function () {
  fs.readdirSync(__dirname).forEach((name) => {
    if (name === "index.js") return;
    const router = require(path.resolve(__dirname, name));
    this.use(router.routes());
    this.use(router.allowedMethods());
  });
};

module.exports = useRouters;
