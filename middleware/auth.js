const { JWT_SECRET } = require("../config/default.json");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ msg: "You must be logged in" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    userId = decoded._id;
    const user = await User.findById(userId).select("-password");
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid and " + err.message });
  }
};
