const router = require("express").Router();
const apiRoutes = require("../api");
const userRoutes = require("./user-routes.js");
// const mainRoutes = require("./main-routes.js");
const homeRoutes = require("./home-routes.js");

router.use("/api", apiRoutes);
router.use("/users", userRoutes);

router.use("/home", homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
