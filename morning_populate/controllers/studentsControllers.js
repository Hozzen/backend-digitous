let { Student } = require("../models/student");

const getStudents = async (req, res) => {
  let student = await Student.find();
  res.json({
    status: "OK!",
    data: student,
  });
};

const getStudentById = async (req, res) => {
  console.log("id:", req.params.id);

  try {
    // const student = await Student.findById(req.params.id);
    const student = await Student.findById(req.params.id).populate("address");
    console.log("student", student);
    res.json({
      status: "OK!",
      data: student,
    });
  } catch {
    message: "error";
  }
};

module.exports = {
  getStudents: getStudents,
  getStudentById: getStudentById,
};
