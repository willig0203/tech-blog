const router = require("express").Router();

// //Sets a basic route
// app.get("/", (req, res) => {
//   res.render("main");
// });

router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/editpost", (req, res) => {
  res.render("editpost");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
