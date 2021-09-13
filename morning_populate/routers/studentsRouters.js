const express = require("express");
const studentsControllers = require("../controllers/studentsControllers");

const router = express.Router();

router.get("/", studentsControllers.getStudents);
router.get("/:id", studentsControllers.getStudentById);

module.exports = router;
