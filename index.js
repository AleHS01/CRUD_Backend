const express = require("express");
const app = express();
const db = require("./database/db.js");
const { Student, Campus } = require("./database/models/index.js");
const PORT = 8080;
const cors = require("cors");
const seed = require("./seed.js");
app.use(cors());

// Mount on API
app.use("/api", require("./api"));

//const syncDB = async () => await db.sync({ force: true });

const serverRun = () => {
  app.listen(process.env.PORT, () => {
    console.log(`Live on port: ${process.env.PORT}`);
  });
};

async function main() {
  //await syncDB();
  console.log("This is going to print models: ", db.models);
  //await db.drop();
  //await db.sync({ force: true });
  await db.sync();
  //await seed();
  await serverRun();
  await seed();
}

main();
