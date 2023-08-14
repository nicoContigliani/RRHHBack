'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BranchShift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BranchShift.init({
    BranchId: DataTypes.BIGINT,
    ShiftId: DataTypes.BIGINT,
    status_branch_shift: DataTypes.BOOLEAN,
    present_day: DataTypes.BOOLEAN,
    delay_day: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'BranchShift',
  });
  return BranchShift;
};