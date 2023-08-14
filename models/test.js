'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Test.belongsTo(models.TypeTest, {
        foreignKey: 'typeTestId',
      });
      Test.belongsToMany(models.Result, { through: models.ResultTest });
      Test.belongsToMany(models.Interview, { through: models.TestInterview });
    }
  }
  Test.init({
    typeTestId: DataTypes.BIGINT,
    name_test: DataTypes.STRING,
    description_test: DataTypes.STRING,
    status_test: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};