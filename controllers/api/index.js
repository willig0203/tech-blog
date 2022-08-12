const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const mainRoutes = require("./main-routes.js");

router.use("/users", userRoutes);
router.use("/main", mainRoutes);

module.exports = router;
