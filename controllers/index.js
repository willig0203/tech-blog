const router = require("express").Router();
const homeRoutes = require("./api/home-routes");
const mainRoutes = require("./api/main-routes.js");

router.use("/", homeRoutes);
router.use("/main", mainRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
