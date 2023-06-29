const Students = require("./students");
const Campuses = require("./campuses");

//Association
//Students may be associated with at most one campus. Likewise, campuses may be associated with many students

// Campuses.hasMany(Students, { through: "CampusesStudents" });
// Students.belongsTo(Campuses, { through: "CampusesStudents" });
Campuses.hasMany(Students);
Students.belongsTo(Campuses);

module.exports = {
  Students,
  Campuses,
};