'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeVacancy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TypeVacancy.init({
    name_vacancy_type: DataTypes.STRING,
    description_vacancy_type: DataTypes.STRING,
    status_vacancy_type: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TypeVacancy',
  });
  return TypeVacancy;
};