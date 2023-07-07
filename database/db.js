const { Sequelize } = require("sequelize");
// const { name } = require("../package.json");

/*
user:postgres
pass: "" <- none
url:localhost
port:5432
database name: crud_database <- need to create it in your machine, 

then run 'node seed.js', and then 'node db/db.js'  to start the server with nodemon
once the server is started, you should see if it appear in the console "DB connection works"
that's what I use to test the connection
*/

//From Sequelize Docs: const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

const db = new Sequelize("postgres://ttp23crud_user:XNxGl2HOV9hhQWHgBSIVQYe5SpDMKZEQ@dpg-cik22cp8g3nc2gf3ugpg-a.oregon-postgres.render.com/ttp23crud", 'ttp23crud_user', 'XNxGl2HOV9hhQWHgBSIVQYe5SpDMKZEQ',  {
  logging: false,
});

// Testing Connection of the db
db.authenticate()
  .then(() => {
    console.log("DB connection works");
  })
  .catch((error) => {
    console.error("DB connection failed:", error);
  });

module.exports = db;
