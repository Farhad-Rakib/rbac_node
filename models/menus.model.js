const { sequelize, Sequelize } = require("../configs/db/connect");

module.exports = (sequelize, Sequelize) => {
  const menu = sequelize.define("Menu", {
    name: {
      type: Sequelize.STRING,
    },
    displayName: {
      type: Sequelize.STRING,
    },
    parentMenuId: {
      type: Sequelize.INTEGER,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
    },
    menuUrl: {
      type: Sequelize.STRING,
    },
  });

  return menu;
};
