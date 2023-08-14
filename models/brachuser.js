'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BrachUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BrachUser.init({
    UserId: DataTypes.BIGINT,
    BranchId: DataTypes.BIGINT,
    status_branch_user: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'BrachUser',
  });
  return BrachUser;
};