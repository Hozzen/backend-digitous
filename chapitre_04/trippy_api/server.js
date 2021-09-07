const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

const hotelsRouter = require("./routers/hotelsRouter.js");
const restaurantsRouter = require("./routers/restaurantsRouter.js");

app.use(cors());
app.use(express.json());

app.use("/hotels", hotelsRouter);
app.use("/restaurants", restaurantsRouter);

app.listen(PORT, () => {
  console.log("Server listening ...");
});
