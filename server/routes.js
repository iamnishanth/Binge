const signin = require("./routes/siginin");
const signup = require("./routes/signup");
const signinWithID = require("./routes/signinWithID");
const getWatchlist = require("./routes/getWatchlist");
const addWatchlist = require("./routes/addWatchlist");
const checkWatchlist = require("./routes/checkWatchlist");
const removeWatchlist = require("./routes/removeWatchlist");

module.exports = {
  signin,
  signup,
  signinWithID,
  getWatchlist,
  addWatchlist,
  checkWatchlist,
  removeWatchlist,
};
