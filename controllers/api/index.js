const router = require("express").Router();
const userRoutes = require("./user-routes.js");
const homeRoutes = require("./home-routes.js");

router.use("/users", userRoutes);
router.use("/home", homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
