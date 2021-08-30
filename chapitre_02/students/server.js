const express = require("express");
const app = express();
const PORT = 3000;

const students = [
  {
    name: "François",
  },
  {
    name: "Albert",
  },
  {
    name: "Christophe",
  },
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  res.json({});
});

app.listen(PORT, () => {
  console.log(`Le serveur sur le port ${PORT} est bien lancé`);
});
