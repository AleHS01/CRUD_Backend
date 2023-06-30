const {DataTypes} = require("sequelize");
const db = require("../db");

//name not empty or null, imageUrl with default val,
// address not empty or null, description large text

const Campus = db.define("Campus", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageurl: {
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

module.exports = Campus;