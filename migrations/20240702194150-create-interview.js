'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Interviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      summary: {
        type: Sequelize.STRING
      },
      interviewDateTime: {
        type: Sequelize.DATE
      },
      interviewers: {
        type: Sequelize.STRING
      },
      interviewMethod: {
        type: Sequelize.STRING
      },
      order: {
        type: Sequelize.BIGINT
      },
      duration: {
        type: Sequelize.BIGINT
      },
      rating: {
        type: Sequelize.FLOAT
      },
      comments: {
        type: Sequelize.STRING
      },
      inerview_result: {
        type: Sequelize.STRING
      },
      requiredActions: {
        type: Sequelize.STRING
      },
      nextActionDateTime: {
        type: Sequelize.DATE
      },
      status_interview: {
        type: Sequelize.BOOLEAN
      },
      TypeInterviewId: {
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
    await queryInterface.dropTable('Interviews');
  }
};