const express = require("express");
const expressValidator = require("express-validator");
const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();

const userRouters = require("./routers/userRouters");

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(console.log("Connected to MongoDB"));

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/users", userRouters);

// STARTING SERVER
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
