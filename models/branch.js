'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Branch.belongsToMany(models.User, { through: models.BrachUser });
      Branch.belongsToMany(models.Shift, { through: models.BranchShift });
      Branch.belongsTo(models.Company, {
        foreignKey: 'idCompany',
      });
    }
  }
  Branch.init({
    name_branch: DataTypes.STRING,
    conditions: DataTypes.STRING,
    idCompany: DataTypes.BIGINT,
    branch_long: DataTypes.STRING,
    branch_lat: DataTypes.STRING,
    branch_score: DataTypes.INTEGER,
    guest: DataTypes.INTEGER,
    status_branch: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Branch',
  });
  return Branch;
};