'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Section.belongsTo(models.SectionType, {
        foreignKey: 'SectionTypeId',
      });
      Section.belongsToMany(models.CV, { through: models.CVSection });
      Section.belongsToMany(models.Item, { through: models.itemSection });

    }
  }
  Section.init({
    SectionTypeId: DataTypes.BIGINT,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    status_section: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Section',
  });
  return Section;
};