const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const studentsRouters = require("./routers/studentsRouters");
dotenv.config({ path: "./config.env" });
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(console.log("connected to MongoDB"));

const app = express();

app.use(express.json());
app.use("/students", studentsRouters);

app.listen(process.env.PORT, () => {
  console.log("Server listen on port : ", process.env.PORT);
});
