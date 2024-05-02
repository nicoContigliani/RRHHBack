'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InterviewResponsible extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InterviewResponsible.belongsTo(models.Interview, { foreignKey: 'InterviewId' });
      InterviewResponsible.belongsTo(models.User, { foreignKey: 'InterviewId' });


    }
  }
  InterviewResponsible.init({
    InterviewId: DataTypes.BIGINT,
    RoadMapId: DataTypes.BIGINT,
    UserId: DataTypes.BIGINT,
    responsibilityDescription: DataTypes.STRING,
    status_interview_responsible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'InterviewResponsible',
  });
  return InterviewResponsible;
};