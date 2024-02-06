'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TestInterviews', {
      id: {
        // allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CandidateId: {
        type: Sequelize.BIGINT
      },
      TestId: {
        type: Sequelize.BIGINT
      },
      interviewDateTime: {
        type: Sequelize.DATE
      },
      results: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      InterviewId: {
        type: Sequelize.BIGINT
      },
      status_test_interview: {
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
    await queryInterface.dropTable('TestInterviews');
  }
};