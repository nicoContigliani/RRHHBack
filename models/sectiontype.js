'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SectionType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SectionType.init({
    name_section_type: DataTypes.STRING,
    description_section_type: DataTypes.STRING,
    status_section_type: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SectionType',
  });
  return SectionType;
};