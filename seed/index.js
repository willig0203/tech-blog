const sequelize = require("../config/connection");
const seeduser = require("./userSeeds");
const seedpost = require("./postSeeds");
const seedcomment = require("./commentSeeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seeduser();
  await seedpost();
  await seedcomment();
  process.exit();
};

seedAll();
