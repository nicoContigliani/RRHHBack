'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InterviewVacance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InterviewVacance.init({
    InterviewId: DataTypes.BIGINT,
    VacancyId: DataTypes.BIGINT,
    interviewDateTime: DataTypes.DATE,
    results: DataTypes.STRING,
    comments: DataTypes.STRING,
    status_interview_vacancy_type: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'InterviewVacance',
  });
  return InterviewVacance;
};

