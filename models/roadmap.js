'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoadMap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RoadMap.belongsToMany(models.User, { through: models.InterviewUser, as: 'Interviewees' });
      RoadMap.belongsToMany(models.User, { through: models.InterviewResponsible, as: 'Responsibles' });
      RoadMap.belongsToMany(models.Interview, { through: models.InterviewResponsible, as: 'Responsibles' });

    }
  }
  RoadMap.init({
    InterviewId: DataTypes.BIGINT,
    VacancyId: DataTypes.BIGINT,
    responsibilityDescription: DataTypes.STRING,
    status_roadmap: DataTypes.BOOLEAN,
    order: DataTypes.BIGINT,
    required: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    duration: DataTypes.BIGINT,
    location: DataTypes.STRING,
    scheduledDateTime: DataTypes.DATE,
    completionDateTime: DataTypes.DATE,
    outcome: DataTypes.STRING,
    nextSteps: DataTypes.TEXT,
    nextActionDateTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'RoadMap',
  });
  return RoadMap;
};