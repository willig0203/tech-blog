const { Post } = require("../models");

const postData = [
  {
    title: "post1",
    post: "my post 1",
    user_id: 1,
    created: Date.now,
    updated: Date.now,
  },
  {
    title: "post2",
    post: "my post 2",
    user_id: 2,
    created: Date.now,
    updated: Date.now,
  },
  {
    title: "post3",
    post: "my post 3",
    user_id: 3,
    created: Date.now,
    updated: Date.now,
  },
];

const seedpost = () => Post.bulkCreate(postData);

module.exports = seedpost;
