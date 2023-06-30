const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { Campus, Student } = require("../database/models");

// Root here is localhost:8080/api/shoes/
router.get("/", async (req, res, next) => {
  try {
    const allCampus = await Campus.findAll();

    allCampus
      ? res.status(200).json(allCampus) // if allShoes is truthy
      : res.status(404).send("Campuses List Not Found"); // if allShoes is falsey
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const campus = await Campus.findByPk(id);

    // const campus = Campus.findByPk(id, {
    //   include: Student,
    // });

    campus
      ? res.status(200).json(campus)
      : res.status(404).send("Campus not Found");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/addCampus", bodyParser.json(), async (req, res, next) => {
  try {
    console.log(req.body);
    const newCampus = Campus.create(req.body);
    res.status(201).json(newCampus);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
