const express = require("express");
const app = express();
const PORT = 3000;

var authors = [
  {
    name: "Lawrence Nowell",
    nationality: "UK",
    books: ["Beowulf"],
  },
  {
    name: "William Shakespeare",
    nationality: "UK",
    books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
  },
  {
    name: "Charles Dickens",
    nationality: "US",
    books: ["Oliver Twist", "A Christmas Carol"],
  },
  {
    name: "Oscar Wilde",
    nationality: "UK",
    books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"],
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "Authors API",
  });
});

app.get("/authors/:id", (req, res) => {
  let params = req.params;
  let author = authors[params.id - 1];
  console.log(params);

  res.json({
    message: `Vous avez demandé : ${author.name}, ${author.nationality}`,
  });
});

app.get("/authors/:id/books", (req, res) => {
  let params = req.params;
  let author = authors[params.id - 1];
  console.log(params);

  res.json({
    message: `Vous avez demandé : ${author.books}`,
  });
});

// On lance le serveur
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
