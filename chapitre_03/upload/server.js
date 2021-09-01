const express = require("express");
const app = express();
const cors = require("cors")
const PORT = 3000;


app.use(express.static("public"));



app.listen(PORT, () => {
  console.log(`Server listen on ${PORT}`);
});
