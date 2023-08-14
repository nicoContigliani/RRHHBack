'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeShift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TypeShift.init({
    name_type_shift: DataTypes.STRING,
    description_type_shift: DataTypes.STRING,
    status_type_shift: DataTypes.BOOLEAN,
    hours: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TypeShift',
  });
  return TypeShift;
};