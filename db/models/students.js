const { DataTypes } = require("sequelize");
const db = require("../db");

const Students = db.define("students", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
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
    validate: {
      isEmail: {
        msg: "Invalid Email Format",
      },
    },
  },
  imageUrl: {
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

module.exports = Students;
