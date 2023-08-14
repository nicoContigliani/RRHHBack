'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CVUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CVUser.init({
    UserId: DataTypes.BIGINT,
    CVId: DataTypes.BIGINT,
    status_cv_user: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CVUser',
  });
  return CVUser;
};