const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user-routes.js");
const mainRoutes = require("./main-routes.js");

router.use("/api", apiRoutes);
router.use("/users", userRoutes);
router.use("/main", mainRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
