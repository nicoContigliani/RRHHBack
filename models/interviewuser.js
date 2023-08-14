'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InterviewUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InterviewUser.init({
    InterViewId: DataTypes.BIGINT,
    UserId: DataTypes.BIGINT,
    userDescription: DataTypes.STRING,
    status_interview_user: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'InterviewUser',
  });
  return InterviewUser;
};