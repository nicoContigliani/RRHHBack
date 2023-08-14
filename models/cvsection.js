'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CVSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CVSection.init({
    CVId: DataTypes.BIGINT,
    SectionId: DataTypes.BIGINT,
    position: DataTypes.BIGINT,
    describle_cv_section: DataTypes.STRING,
    status_cv_section: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CVSection',
  });
  return CVSection;
};