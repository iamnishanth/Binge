const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const User = require("../models/user");

router.post("/signup", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const checkUserExist = await User.findOne({ email: req.body.email });
  if (!checkUserExist) {
    const user = new User({
      email: req.body.email,
      password: hashedPassword,
      watchlist: [],
    });

    let result = await user.save();
    res.json({ success: true, message: "Account created successflly" });
  } else {
    res.json({ success: false, message: "User already exist" });
  }
});

module.exports = router;
