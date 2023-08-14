'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsToMany(models.Section, { through: models.itemSection });

    }
  }
  Item.init({
    itemTitle: DataTypes.STRING,
    itemContent: DataTypes.STRING,
    status_item: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};