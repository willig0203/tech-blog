const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router
  .post("/postNew", (req, res) => {
    Post.create({
      userid: req.session.user_id,
      title: req.body.title,
      password: req.body.content,
      createdat: Date(),
    }).then((dbPostData) => {
      //   req.session.save(() => {
      //     req.session.user_id = dbPostData.id;
      //     req.session.username = dbPostData.username;
      //     req.session.loggedIn = true;

      res.json(dbPostData);
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
