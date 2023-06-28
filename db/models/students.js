const { DataTypes } = require("sequelize");
const db = require("../db");

const Students = db.define("shoes", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  gpa: {
    type: DataTypes.DECIMAL,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

module.exports = Students;
