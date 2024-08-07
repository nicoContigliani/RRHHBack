'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TypeVacancies', {
      id: {
        // allowNull: false,
        // unique: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_vacancy_type: {
        type: Sequelize.STRING
      },
      description_vacancy_type: {
        type: Sequelize.STRING
      },
      status_vacancy_type: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TypeVacancies');
  }
};