const { Comment } = require("../models");

const commentData = [
  {
    comment: "comment1",
    post_id: 1,
    user_id: 1,
    created: Date.now,
    updated: Date.now,
  },
  {
    comment: "comment2",
    post_id: 2,
    user_id: 2,
    created: Date.now,
    updated: Date.now,
  },
  {
    comment: "comment3",
    post_id: 3,
    user_id: 3,
    created: Date.now,
    updated: Date.now,
  },
];

const seedcomment = () => Comment.bulkCreate(commentData);

module.exports = seedcomment;
