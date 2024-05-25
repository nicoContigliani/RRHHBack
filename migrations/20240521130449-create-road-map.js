'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RoadMaps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      InterviewId: {
        type: Sequelize.BIGINT
      },
      VacancyId: {
        type: Sequelize.BIGINT
      },
      responsibilityDescription: {
        type: Sequelize.STRING
      },
      status_roadmap: {
        type: Sequelize.BOOLEAN
      },
      required: {
        type: Sequelize.BOOLEAN
      },
      description: {
        type: Sequelize.TEXT
      },
      duration: {
        type: Sequelize.BIGINT
      },
      location: {
        type: Sequelize.STRING
      },
      scheduledDateTime: {
        type: Sequelize.DATE
      },
      start_DateTime: {
        type: Sequelize.DATE
      },
      finish_DateTime: {
        type: Sequelize.DATE
      },
      completionDateTime: {
        type: Sequelize.DATE
      },
      outcome: {
        type: Sequelize.STRING
      },
      before_steps: {
        type: Sequelize.TEXT
      },
      after_steps: {
        type: Sequelize.TEXT
      },
      nextActionDateTime: {
        type: Sequelize.DATE
      },
      image: {
        type: Sequelize.STRING
      },
      all_Steps: {
        type: Sequelize.BIGINT
      },
      order_Steps: {
        type: Sequelize.BIGINT
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
    await queryInterface.dropTable('RoadMaps');
  }
};