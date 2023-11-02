const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPass = (req, res, next) => {
  if (req.body.password) {
    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      req.body.password = hash;
    });
  }
  next();
};

module.exports = { hashPass };
