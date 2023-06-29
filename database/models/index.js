const Student = require("./student");
const Campus = require("./campus");

//Association
//Students may be associated with at most one campus. Likewise, campuses may be associated with many students

// Campuses.hasMany(Students, { through: "CampusesStudents" });
// Students.belongsTo(Campuses, { through: "CampusesStudents" });
Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  Student,
  Campus,
};
