const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { Student, Campus } = require("../database/models");
const { route } = require("./student");

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
  //const student = await Student.findByPk(id); //this just get the student without the campus object

  //what is below should work, it should return a student and also the campus is associate with,
  // but since the campusID column is null, I don't think will work yet, until we fill that gap
  const student = await Student.findByPk(id, {
    include: {
      model: Campus,
    },
  });
  student
    ? res.status(200).json(student)
    : res.status(404).send("Student not Found");
});

// Add a new Student when endpoint "/student/add/data..." is hit

/* 
What is happenig here when we want to add a new student in the url of the endpoint we expect the data to arrievd
we expect the firstname, lastname, email, imageurl, gpa, campusId, then we discontruct req.body, or passing it straight and get the data
then do Student.create({data}) to create basically a new Student in the data base,
*/

router.post("/addStudent", bodyParser.json(), async (req, res, next) => {
  try {
    console.log(req.body);
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/removeStudent/:id", async (req, res, next) => {
  const { id } = req.params; //getting the id from the parameter list
  try {
    //firt we find the student we want to delete by id
    const studentToDelete = await Student.findByPk(id);
    //then we destroy the student
    await studentToDelete.destroy();
    console.log(studentToDelete);
    res
      .status(201)
      .send(
        "Deleted Successful, Check Server Terminal To Check Student details"
      );
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Route to edit student info, we recieve an id, with it, we get the student,
//and update the corresponding data send in the body
router.put("/updateStudent/:id", bodyParser.json(), async (req, res, next) => {
  try {
    const { id } = req.params;
    //first we find the student we want to update
    const student = await Student.findByPk(id);
    /*then call the update method on the student, and pass the req.body, 
    it's simlar to creating a new student (POST), just that it will update the records
    if we pass let's say just the name inside the body, it will update just the databse with the new name
    so it only modifies the attributes that are in the body not all of them
    */

    //from what I see anytime we are woring with Sequelize or
    //the db we have to put await, or we will recieve an empty object

    if (student) {
      await student.update(req.body);
      await student.save(); //according to documentation it save the data
      res.status(201).json(student);
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
