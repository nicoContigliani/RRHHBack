'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InterviewResponsibles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      InterviewId: {
        type: Sequelize.BIGINT
      },
      UserId: {
        type: Sequelize.BIGINT
      },
      responsibilityDescription: {
        type: Sequelize.STRING
      },
      status_interview_responsible: {
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
    await queryInterface.dropTable('InterviewResponsibles');
  }
};