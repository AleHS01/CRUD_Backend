const express = require("express");
const router = express.Router();
const { Campus } = require("../db/models");

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

module.exports = router;