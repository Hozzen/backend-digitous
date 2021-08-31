const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

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

// Permet de récupérer le body
app.use(express.json());

app.use(cors());



// Middleware global
app.use((req, res, next) => {
  console.log("middleware ok");
  next();
});



app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const newStudent = req.body;
  console.log(newStudent)
  let newStudentsList = students.push(newStudent)
  console.log(newStudentsList)
  
  res.json({
    message: "Student bien ajouté !",
    students: students,
  });
});

app.listen(PORT, () => {
  console.log(`Le serveur sur le port ${PORT} est bien lancé`);
});
