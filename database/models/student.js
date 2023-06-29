const { DataTypes } = require("sequelize");
const db = require("../db");

const Student = db.define("Student", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "Invalid Email Format",
      },
    },
  },
  imageurl: {
    type: DataTypes.STRING,
    defaultValue: "https://picsum.photos/200",
  },
  gpa: {
    type: DataTypes.DECIMAL,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

module.exports = Student;
