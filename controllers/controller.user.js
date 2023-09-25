const data = require("@ampt/data");
const ksuid = require("ksuid");
function createUser(req, res, next) {
  const key = ksuid.randomSync();
  const user = JSON.parse(req.body);
  data.set(key, user);
}

module.exports = {
  createUser,
};
