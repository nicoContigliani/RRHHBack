'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InterviewRoadMap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InterviewRoadMap.init({
    InterviewId: DataTypes.BIGINT,
    RoadMapId: DataTypes.BIGINT,
    status_InterviewRoadMap: DataTypes.BOOLEAN,
    statusProgres: DataTypes.STRING,
    sequence: DataTypes.BIGINT,
    interviewee: DataTypes.STRING,
    position: DataTypes.STRING,
    notes: DataTypes.TEXT,
    comments: DataTypes.TEXT,
    descriptions: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'InterviewRoadMap',
  });
  return InterviewRoadMap;
};