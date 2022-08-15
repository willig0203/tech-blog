const sequelize = require("../config/connection");

const seeduser = require("./userseeds");
const seedpost = require("./postseeds");
const seedcomment = require("./commentseeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seeduser();
  await seedpost();
  await seedcomment();
  process.exit();
};

seedAll();
