const fs = require("fs");
const sort = require("sort-package-json");
const { name } = require("./package.json");

try {
  const target = "./package.json";
  const pkg = JSON.parse(fs.readFileSync(target, "utf-8"));
  if (typeof pkg.prettier === "undefined") {
    pkg.prettier = name;
    fs.writeFileSync(target, JSON.stringify(sort(pkg), null, "	"), "utf-8");
  }
} catch (e) {
  console.log(e);
}