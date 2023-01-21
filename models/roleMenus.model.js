const { sequelize, Sequelize } = require("../configs/db/connect");

module.exports = (sequelize, Sequelize) => {
  const roleMenus = sequelize.define("RoleMenu", {
    roleId: {
      type: Sequelize.INTEGER,
    },
    menuId: {
      type: Sequelize.INTEGER,
    },
  });

  return roleMenus;
};
