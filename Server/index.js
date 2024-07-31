const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 5000;
const bodyParser = require("body-parser");
const userRoutes = require("../routers/user_routes");

const mongoURI =
  "mongodb+srv://admin:1493745810Xeyht1@node-shop.zdrisrk.mongodb.net/";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use((req, res, next) => {
  req.headers["x-admin-username"] = ""; //! DEF
  if (req.headers["authorization"]) {
    req.headers["x-admin-username"] = req.headers["authorization"]; //! No idea, Tekrar bak
  }
  next();
});
app.use(cors());

app.use(express.json());

// Router'ı kullan
app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("XXX");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
