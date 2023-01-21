const dotenv = require("dotenv");
dotenv.config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// model/tables
db.menus = require("../../models/menus.model.js")(sequelize, Sequelize);
db.roles = require("../../models/roles.model.js")(sequelize, Sequelize);
db.roleMenus = require("../../models/roleMenus.model.js")(sequelize, Sequelize);

module.exports = db;

// db sync to update the Database if any changes occur in the table
// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
