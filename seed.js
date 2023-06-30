//const db = require("./database/db.js");
const { Student, Campus } = require("./database/models");

const tempImgURL =
  "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
const tempCampusImgURl =
  "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

//Students dummy data
const seedStudent = [
  {
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@example.com",
    imageurl: tempImgURL,
    gpa: 3.7,
    CampusId: 1,
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    email: "janesmith@example.com",
    imageurl: tempImgURL,
    gpa: 3.9,
    CampusId: 4,
  },
  {
    firstname: "Michael",
    lastname: "Johnson",
    email: "michaeljohnson@example.com",
    imageurl: tempImgURL,
    gpa: 3.5,
    CampusId: 3,
  },
  {
    firstname: "Emily",
    lastname: "Williams",
    email: "emilywilliams@example.com",
    imageurl: tempImgURL,
    gpa: 4.0,
    CampusId: 2,
  },
  {
    firstname: "David",
    lastname: "Brown",
    email: "davidbrown@example.com",
    imageurl: tempImgURL,
    gpa: 3.2,
    CampusId: 3,
  },
  {
    firstname: "Sophia",
    lastname: "Davis",
    email: "sophiadavis@example.com",
    imageurl: tempImgURL,
    gpa: 3.8,
    CampusId: 1,
  },
  {
    firstname: "Daniel",
    lastname: "Anderson",
    email: "danielanderson@example.com",
    imageurl: tempImgURL,
    gpa: 3.6,
    CampusId: 1,
  },
  {
    firstname: "Olivia",
    lastname: "Martinez",
    email: "oliviamartinez@example.com",
    imageurl: tempImgURL,
    gpa: 3.9,
    CampusId: 2,
  },
  {
    firstname: "William",
    lastname: "Taylor",
    email: "williamtaylor@example.com",
    imageurl: tempImgURL,
    gpa: 3.4,
    CampusId: 4,
  },
  {
    firstname: "Isabella",
    lastname: "Thomas",
    email: "isabellathomas@example.com",
    imageurl: tempImgURL,
    gpa: 3.7,
    CampusId: 3,
  },
];

const seedCampuses = [
  {
    name: "Central University",
    imageurl: tempCampusImgURl,
    address: "123 Main St, Orlando",
    description:
      "A vibrant campus fostering academic excellence and personal growth.",
  },
  {
    name: "Sunset College",
    imageurl: tempCampusImgURl,
    address: "456 Elm St, California",
    description:
      "A picturesque campus offering diverse educational opportunities.",
  },
  {
    name: "Northern State University",
    imageurl: tempCampusImgURl,
    address: "789 Oak St, Boston",
    description: "An innovative campus dedicated to shaping future leaders.",
  },
  {
    name: "Greenfield Institute",
    imageurl: tempCampusImgURl,
    address: "321 Pine St, New York",
    description:
      "A nurturing campus promoting creativity and intellectual exploration.",
  },
];

const seed = async () => {
  await Campus.bulkCreate(seedCampuses);
  await Student.bulkCreate(seedStudent);
};

seed().then(() => process.exit());

/*
Employee.bulkCreate(dataArray, 
    {
        fields:["id", "name", "address"] ,
        updateOnDuplicate: ["name"] 
    } )
*/
