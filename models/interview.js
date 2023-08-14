'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Interview.belongsToMany(models.Test, { through: models.TestInterview });
      Interview.belongsToMany(models.Vacancy, { through: models.InterviewVacance });
      Interview.belongsToMany(models.User, { through: models.InterviewUser });
      Interview.belongsToMany(models.User, { through: models.InterviewResponsible });
      // Interview.hasMany(models.TypeInterview, {
      //   foreignKey: 'id'
      // });


      // Interview.belongsToMany(models.Company, { through: models.InterviewVacance, foreignKey: 'InterviewId' });

    }
  }
  Interview.init({
    interviewDateTime: DataTypes.DATE,
    interviewType: DataTypes.STRING,
    interviewers: DataTypes.STRING,
    interviewMethod: DataTypes.STRING,
    duration: DataTypes.BIGINT,
    rating: DataTypes.FLOAT,
    comments: DataTypes.STRING,
    inerview_result: DataTypes.STRING,
    requiredActions: DataTypes.STRING,
    nextActionDateTime: DataTypes.DATE,
    interview_status: DataTypes.BOOLEAN,
    TypeInterviewId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Interview',
  });
  return Interview;
};