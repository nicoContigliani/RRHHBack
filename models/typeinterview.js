'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeInterview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TypeInterview.init({
    name_type_test: DataTypes.STRING,
    description_type_test: DataTypes.STRING,
    status_Type_interview: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TypeInterview',
  });
  return TypeInterview;
};