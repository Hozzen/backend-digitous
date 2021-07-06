const express = require('express');
const app = express();

const port = 8000

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

// Exercice 1 

app.get("/", (req, res) => {
    res.send("Authors API")
});

// Exercice 2 

app.get("/authors/:number", (req, res) => {
    let number = req.params.number
    res.send(`${authors[number - 1].name}, ${authors[number - 1].nationality}`)

});

// Exercice 3 


app.get("/authors/:number/books", (req, res) => {
    let number = req.params.number;
    res.send(`${authors[number].books}`)
});

// Exercice 4 

app.get("/json/authors/:id", (req, res) => {
    let value = req.params.id;
    res.json({name: authors[value].name,
    nationality: authors[value].nationality})

})

app.get("/json/authors/:id/books", (req, res) => {
    let value = req.params.id;
    res.json({books: authors[value].books})

})









app.listen(port, () =>  {
    console.log("Server started on port: " + port);
});