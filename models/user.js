'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Role, { through: models.RollUser });
      User.belongsToMany(models.Branch, { through: models.BrachUser });

      

      // User.belongsToMany(models.Interview, { through: models.InterviewUser });
      // User.belongsToMany(models.Interview, { through: models.InterviewResponsible });

      User.belongsToMany(models.Interview, { through: models.InterviewUser, as: 'Interviewees' });
      User.belongsToMany(models.Interview, { through: models.InterviewResponsible, as: 'Responsibles' });
      
      User.belongsToMany(models.RoadMap, { through: models.InterviewUser, as: 'IntervieweesForRoadMap' });
      User.belongsToMany(models.RoadMap, { through: models.InterviewResponsible, as: 'ResponsiblesForRoadMap' });
      


      User.belongsToMany(models.CV, { through: models.CVUser });

  
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    phone: DataTypes.STRING,
    birthday: DataTypes.STRING,
    Score: DataTypes.BIGINT,
    status_user: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};