const express = require("express");
const app = express();
const db = require("./database/db.js");
const { Student, Campus } = require("./database/models/index.js");
const PORT = 8080;

//const syncDB = async () => await db.sync({ force: true });

const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

async function main() {
  //await syncDB();
  console.log("This is going to print models: ", db.models);
  await db.drop();
  await db.sync({ force: true });
  await serverRun();
}

main();
