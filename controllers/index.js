const router = require("express").Router();
const homeRoutes = require("./api/home-routes");
const mainRoutes = require("./api/main-routes.js");
const userRoutes = require("./api/user-routes.js");

router.use("/", homeRoutes);
router.use("/main", mainRoutes);
router.use("/users", userRoutes);
router.use("/home", homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
