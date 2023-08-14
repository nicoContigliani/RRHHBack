'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyVacances extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyVacances.init({
    VacancyId: DataTypes.BIGINT,
    UserId: DataTypes.BIGINT,
    status_company_vacances: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CompanyVacances',
  });
  return CompanyVacances;
};