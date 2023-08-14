'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResultTest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ResultTest.init({
    TestId: DataTypes.BIGINT,
    ResultId: DataTypes.BIGINT,
    status_result_test: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ResultTest',
  });
  return ResultTest;
};