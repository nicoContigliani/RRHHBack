'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoadMapVacance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoadMapVacance.init({
    VacancyId: DataTypes.BIGINT,
    RoadMapId: DataTypes.BIGINT,
    status_RoadMapVacance: DataTypes.BOOLEAN,
    comments: DataTypes.TEXT,
    statusProgres: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RoadMapVacance',
  });
  return RoadMapVacance;
};