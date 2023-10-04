'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CV extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CV.belongsToMany(models.User, { through: models.CVUser });
      CV.belongsToMany(models.Section, { through: models.CVSection });
      CV.belongsToMany(models.Item, { through: models.itemSection });

    }
  }
  CV.init({
    title: DataTypes.STRING,
    description_cv: DataTypes.STRING,
    status_cv: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CV',
  });
  return CV;
};

