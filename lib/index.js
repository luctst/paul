require = require("esm")(module);

if (process.env.NODE_ENV === "development") {
  module.exports = require("./src/paul");
} else {
  module.exports = require("./umd/paul.server.min");
}
