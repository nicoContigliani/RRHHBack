'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestInterview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TestInterview.init({
    CandidateId: DataTypes.BIGINT,
    TestId: DataTypes.BIGINT,
    interviewDateTime: DataTypes.DATE,
    results: DataTypes.STRING,
    comments: DataTypes.STRING,
    InterviewId: DataTypes.BIGINT,
    status_test_interview: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TestInterview',
  });
  return TestInterview;
};