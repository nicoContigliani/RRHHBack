'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itemSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  itemSection.init({
    ItemId: DataTypes.BIGINT,
    SectionId: DataTypes.BIGINT,
    position: DataTypes.BIGINT,
    atribute: DataTypes.STRING,
    status_item_section: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'itemSection',
  });
  return itemSection;
};