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
      itemSection.belongsTo(models.Item, {
        foreignKey: 'ItemId',
        });
        itemSection.belongsTo(models.Section, {
        foreignKey: 'SectionId',
        });
    }
  }
  itemSection.init({
    ItemId: DataTypes.BIGINT,
    SectionId: DataTypes.BIGINT,
    position: DataTypes.BIGINT,
    title_atribute: DataTypes.STRING,
    atribute: DataTypes.STRING,
    detail_atribute: DataTypes.STRING,
    information: DataTypes.STRING,
    status_item_section: DataTypes.BOOLEAN,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'itemSection',
  });
  return itemSection;
};