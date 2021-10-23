const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const User = require("../models/user");

router.post("/signinWithID", async (req, res) => {
  const token = req.body.headers.Authorization;
  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
    if (err) {
      res.json({ ...err });
    } else {
      let user = await User.findById(decodedToken.user);
      if (user) {
        res.json({
          id: user._id,
        });
      }
    }
  });
});

module.exports = router;
