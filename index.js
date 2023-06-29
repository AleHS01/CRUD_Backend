const express = require("express");
const app = express();
const db = require("./db");
const PORT = 8080;

//const syncDB = async () => await db.sync({ force: true });

const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

async function main() {
  //await syncDB();
  await db.sync({ force: true });
  await serverRun();
}

main();
