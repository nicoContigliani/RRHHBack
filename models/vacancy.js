'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacancy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vacancy.belongsToMany(models.Interview, { through: models.InterviewVacance });
      // Vacancy.belongsToMany(models.Company, { through: models.InterviewVacance });
      Vacancy.belongsTo(models.TypeVacancy, { foreignKey: 'TypeVacancyId' });
      Vacancy.belongsToMany(models.Company, { through: models.CompanyVacances });

    }
  }
  Vacancy.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    requirements: DataTypes.STRING,
    responsibilities: DataTypes.STRING,
    status_vacancy: DataTypes.BOOLEAN,
    TypeVacancyId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Vacancy',
  });
  return Vacancy;
};