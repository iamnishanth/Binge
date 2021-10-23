const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes.signin);
app.use(routes.signup);
app.use(routes.signinWithID);
app.use(routes.getWatchlist);
app.use(routes.addWatchlist);
app.use(routes.checkWatchlist);
app.use(routes.removeWatchlist);

app.listen(PORT, () => {
  console.log("Server started and running on port", PORT);
});
