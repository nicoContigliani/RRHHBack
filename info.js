
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

      // Vacancy.belongsToMany(models.RoadMap, { through: models.RoadMapVacance, as: 'RoadMap' });
      Vacancy.belongsToMany(models.RoadMap, { through: models.RoadMapVacance });

      Vacancy.belongsTo(models.TypeVacancy, {
        foreignKey: 'id',
      });

    }
  }
  Vacancy.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    requirements: DataTypes.TEXT,
    responsibilities: DataTypes.TEXT,
    status_vacancy: DataTypes.BOOLEAN,
    status_vacancy_work: DataTypes.STRING,
    start_vacancy: DataTypes.DATE,
    finish_vacancy: DataTypes.DATE,
    TypeVacancyId: DataTypes.BIGINT,
    extra_data: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vacancy',
  });
  return Vacancy;
};