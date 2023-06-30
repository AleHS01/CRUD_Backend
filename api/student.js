const express = require("express");
const router = express.Router();
const { Student, Campus } = require("../database/models");

router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Student.findAll();

    allStudents
      ? res.status(200).json(allStudents)
      : res.status(404).send("Students List Not Found");
  } catch (error) {
    next(error);
  }
});

/* BACKEND & FRONTEND TEAM:

"/:id" means in this root "/student" if you pass a student /student/1, the one will be the id parameter
if we had like "/:id/:name" we are expecting something like this: /student/1/Alex
and the data from the url or the end point is retriev with req.params atribute so:
const id = req.params.id, means we are retrieving the id from the endpoint
const name = req.params.name retrieve the name from the endpoint,
or can discontructted: const {id, name} = req.params
*/
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const student = await Student.findByPk(id); //this just get the student without the campus object

  //what is below should work, it should return a student and also the campus is associate with,
  // but since the campusID column is null, I don't think will work yet, until we fill that gap

  // const student = Student.findByPk(id, {
  //   include: Campus,
  // });
  student
    ? res.status(200).json(student)
    : res.status(404).send("Student not Found");
});

module.exports = router;
