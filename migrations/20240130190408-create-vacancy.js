'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vacancies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      requirements: {
        type: Sequelize.TEXT
      },
      responsibilities: {
        type: Sequelize.TEXT
      },
      status_vacancy: {
        type: Sequelize.BOOLEAN
      },
      status_vacancy_work: {
        type: Sequelize.STRING
      },
      start_vacancy: {
        type: Sequelize.DATE
      },
      finish_vacancy: {
        type: Sequelize.DATE
      },
      TypeVacancyId: {
        type: Sequelize.BIGINT
      },
      extra_data: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Vacancies');
  }
};