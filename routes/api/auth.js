const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { JWT_SECRET } = require("../../config/default.json");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

const User = mongoose.model("User");

//signup
router.post(
  "/signup",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please enter a valid email address").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { name, email, password } = req.body;
      let user = await User.findOne({ email: email });
      if (user) {
        return res
          .status(422)
          .json({ msg: "User already exists with this email" });
      }
      user = new User({ name, email, password });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      res.json({ msg: "Saved Successfully" });
    } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
    }
  }
);

// signin
router.post(
  "/signin",
  [
    check("email", "Please enter a valid email address").isEmail(),
    check("password", "Please enter a password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email: email });
      if (!user) {
        return res
          .status(422)
          .json({ msg: "User doesn't exists with this email" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Incorrect password" }] });
      }
      const token = jwt.sign({ _id: user._id }, JWT_SECRET);
      res.json({ token, user });
    } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
    }
  }
);

//get user
router.get("/", auth, (req, res) => {
  res.json(req.user);
});

module.exports = router;
