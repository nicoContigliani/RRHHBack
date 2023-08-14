'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Permission.belongsToMany(models.Role, { through: models.PermissionRoll });

    }
  }
  Permission.init({
    name_permission: DataTypes.STRING,
    conditions: DataTypes.STRING,
    code: DataTypes.STRING,
    creates: DataTypes.BOOLEAN,
    reads: DataTypes.BOOLEAN,
    updates: DataTypes.BOOLEAN,
    deletes: DataTypes.BOOLEAN,
    admins: DataTypes.BOOLEAN,
    exports: DataTypes.BOOLEAN,
    imports: DataTypes.BOOLEAN,
    approve: DataTypes.BOOLEAN,
    generate_reports: DataTypes.BOOLEAN,
    configure: DataTypes.BOOLEAN,
    restrict: DataTypes.BOOLEAN,
    manage_users: DataTypes.BOOLEAN,
    manage_roles: DataTypes.BOOLEAN,
    audit: DataTypes.BOOLEAN,
    status_permission: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Permission',
  });
  return Permission;
};