const express = require("express");
const brcypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

const User = require("../models/user");

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

router.post("/signin", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    let match = await brcypt.compare(req.body.password, user.password);
    if (match) {
      res.json({
        success: true,
        message: "Login Successfull",
        token: generateToken(user._id),
      });
    } else {
      res.json({ success: false, message: "Invalid password" });
    }
  } else {
    res.json({ success: false, message: "User does not exist" });
  }
});

module.exports = router;
