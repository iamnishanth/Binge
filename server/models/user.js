const db = require("../config/db");

const userSchema = new db.Schema({
  email: String,
  password: String,
  watchlist: [],
  likes: [],
  seen: [],
});

const User = new db.model("User", userSchema);

module.exports = User;
