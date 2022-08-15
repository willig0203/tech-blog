const { User } = require("../models");

const userData = [
  {
    username: "user1",
    email: "user1@gmail.com",
    password: "user1",
  },
  {
    username: "user2",
    email: "user2@gmail.com",
    password: "user2",
  },
  {
    username: "user3",
    email: "user3@gmail.com",
    password: "user3",
  },
];

const seeduser = () => User.bulkCreate(userData);

module.exports = seeduser;
