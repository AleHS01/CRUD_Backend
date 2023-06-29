const express = require("express");
const app = express();
const db = require("./db");
const PORT = 8080;

const syncDB = () => db.sync();

const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

syncDB();
serverRun();
