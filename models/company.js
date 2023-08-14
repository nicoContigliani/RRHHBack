'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.belongsToMany(models.Vacancy, { through: models.CompanyVacances });
      Company.belongsToMany(models.Vacancy, { through: models.CompanyVacances });
      // Company.belongsToMany(models.Interview, { through: models.InterviewVacance });

      // Company.belongsToMany(models.Interview, { through: models.InterviewVacance, foreignKey: 'CompanyId' });

    }
  }
  Company.init({
    company: DataTypes.STRING,
    companyPhone: DataTypes.STRING,
    companyEmail: DataTypes.STRING,
    urlCompany: DataTypes.STRING,
    status_company: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};