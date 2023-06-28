const {DataTypes} = require("sequelize");
const db = require("../db");

//name not empty or null, imageUrl with default val,
// address not empty or null, description large text

const Campuses = db.define("campuses", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        defaultValue: "",
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
});

module.exports = Campuses;