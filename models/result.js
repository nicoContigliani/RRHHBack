'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Result.belongsToMany(models.Test, { through: models.ResultTest });

    }
  }
  Result.init({
    result: DataTypes.STRING,
    description_result_test: DataTypes.STRING,
    status_result: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};