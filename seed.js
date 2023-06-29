const db = require("./db");
const { Students, Campuses } = require("./db/models");

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
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    email: "janesmith@example.com",
    imageurl: tempImgURL,
    gpa: 3.9,
  },
  {
    firstname: "Michael",
    lastname: "Johnson",
    email: "michaeljohnson@example.com",
    imageurl: tempImgURL,
    gpa: 3.5,
  },
  {
    firstname: "Emily",
    lastname: "Williams",
    email: "emilywilliams@example.com",
    imageurl: tempImgURL,
    gpa: 4.0,
  },
  {
    firstname: "David",
    lastname: "Brown",
    email: "davidbrown@example.com",
    imageurl: tempImgURL,
    gpa: 3.2,
  },
  {
    firstname: "Sophia",
    lastname: "Davis",
    email: "sophiadavis@example.com",
    imageurl: tempImgURL,
    gpa: 3.8,
  },
  {
    firstname: "Daniel",
    lastname: "Anderson",
    email: "danielanderson@example.com",
    imageurl: tempImgURL,
    gpa: 3.6,
  },
  {
    firstname: "Olivia",
    lastname: "Martinez",
    email: "oliviamartinez@example.com",
    imageurl: tempImgURL,
    gpa: 3.9,
  },
  {
    firstname: "William",
    lastname: "Taylor",
    email: "williamtaylor@example.com",
    imageurl: tempImgURL,
    gpa: 3.4,
  },
  {
    firstname: "Isabella",
    lastname: "Thomas",
    email: "isabellathomas@example.com",
    imageurl: tempImgURL,
    gpa: 3.7,
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
  await Campuses.bulkCreate(seedCampuses, {
    fields: ["id", "name", "imageurl", "address", "description"]
  });
  //await Students.bulkCreate(seedStudent);
};

seed().then(() => process.exit());

/*
Employee.bulkCreate(dataArray, 
    {
        fields:["id", "name", "address"] ,
        updateOnDuplicate: ["name"] 
    } )
*/