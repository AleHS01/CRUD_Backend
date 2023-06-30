const express = require("express");
const router = express.Router();
const { Student, Campus } = require("../database/models");

//get All student when this endpoints get hit "/student"
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

//get the student with specified id when this endpoints get hit "/student/id"
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

// Add a new Student when endpoint "/student/add/data..." is hit

/* 
What is happenig here when we want to add a new student in the url of the endpoint we expect the data to arrievd
we expect the firstname, lastname, email, imageurl, gpa, campusId, then we discontruct req.params and get the data
then do Student.create({data}) to create basically a new Student in the data base,
*/

router.post(
  "/add/:firstname/:lastname/:email/:imageurl/:gpa/:campusId",
  async (req, res, next) => {
    const { firstname, lastname, email, imageurl, gpa, campusId } = req.params;
    const newStudent = await Student.create({
      firstname: firstname | "Unknown",
      lastname: lastname | "Unknown",
      email: email | "unknown@example.com",
      imageurl:
        imageurl |
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
      gpa: gpa | 0.0,
      campusId: campusId | null,
    });

    //putting some data in case what we get is undefined or null

    //returning the student just in case, they need it for re-rendering
    res.status(200).json(student);
    res.status(404).send("Error while adding student to the database");
  }
);

module.exports = router;
