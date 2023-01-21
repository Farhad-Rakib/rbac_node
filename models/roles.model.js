const { sequelize, Sequelize } = require("../configs/db/connect");

module.exports = (sequelize, Sequelize) => {
  const role = sequelize.define("Role", {
    name: {
      type: Sequelize.STRING,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
    },
  });

  return role;
};
