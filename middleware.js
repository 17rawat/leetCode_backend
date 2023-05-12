const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // console.log(authHeader);
  if (!authHeader) {
    return res.status(403).json({ msg: "Missing auth header" });
  }

  const token = authHeader.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // console.log(decoded);
  if (decoded && decoded.id) {
    req.userId = decoded.id;
    next();
  } else {
    return res.status(403).json({ msg: "Incorrect token" });
  }
};

module.exports = auth;
