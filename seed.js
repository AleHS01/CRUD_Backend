const db = require("./db");
const { Students, Campuses } = require("./db/models");

const tempImgURL =
  "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
const tempCampusImgURl =
  "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

//Students dummy data
const seedStudent = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    imageUrl: tempImgURL,
    gpa: 3.7,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "janesmith@example.com",
    imageUrl: tempImgURL,
    gpa: 3.9,
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    email: "michaeljohnson@example.com",
    imageUrl: tempImgURL,
    gpa: 3.5,
  },
  {
    firstName: "Emily",
    lastName: "Williams",
    email: "emilywilliams@example.com",
    imageUrl: tempImgURL,
    gpa: 4.0,
  },
  {
    firstName: "David",
    lastName: "Brown",
    email: "davidbrown@example.com",
    imageUrl: tempImgURL,
    gpa: 3.2,
  },
  {
    firstName: "Sophia",
    lastName: "Davis",
    email: "sophiadavis@example.com",
    imageUrl: tempImgURL,
    gpa: 3.8,
  },
  {
    firstName: "Daniel",
    lastName: "Anderson",
    email: "danielanderson@example.com",
    imageUrl: tempImgURL,
    gpa: 3.6,
  },
  {
    firstName: "Olivia",
    lastName: "Martinez",
    email: "oliviamartinez@example.com",
    imageUrl: tempImgURL,
    gpa: 3.9,
  },
  {
    firstName: "William",
    lastName: "Taylor",
    email: "williamtaylor@example.com",
    imageUrl: tempImgURL,
    gpa: 3.4,
  },
  {
    firstName: "Isabella",
    lastName: "Thomas",
    email: "isabellathomas@example.com",
    imageUrl: tempImgURL,
    gpa: 3.7,
  },
];

const seedCampuses = [
  {
    name: "Central University",
    imageUrl: tempCampusImgURl,
    address: "123 Main St, Orlando",
    description:
      "A vibrant campus fostering academic excellence and personal growth.",
  },
  {
    name: "Sunset College",
    imageUrl: tempCampusImgURl,
    address: "456 Elm St, California",
    description:
      "A picturesque campus offering diverse educational opportunities.",
  },
  {
    name: "Northern State University",
    imageUrl: tempCampusImgURl,
    address: "789 Oak St, Boston",
    description: "An innovative campus dedicated to shaping future leaders.",
  },
  {
    name: "Greenfield Institute",
    imageUrl: tempCampusImgURl,
    address: "321 Pine St, New York",
    description:
      "A nurturing campus promoting creativity and intellectual exploration.",
  },
];

const seed = async () => {
  await Students.bulkCreate(seedStudent);
  await Campuses.bulkCreate(seedCampuses);
};

seed().then(() => process.exit());
