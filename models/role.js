'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.belongsToMany(models.User, { through: models.RollUser });
      Role.belongsToMany(models.Permission, { through: models.PermissionRoll });

    }
  }
  Role.init({
    name_role: DataTypes.STRING,
    status_role: DataTypes.BOOLEAN,
    description_role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};