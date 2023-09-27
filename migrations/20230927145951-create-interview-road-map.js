'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InterviewRoadMaps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      InterviewId: {
        type: Sequelize.BIGINT
      },
      RoadMapId: {
        type: Sequelize.BIGINT
      },
      status_InterviewRoadMap: {
        type: Sequelize.BOOLEAN
      },
      comments: {
        type: Sequelize.TEXT
      },
      statusProgres: {
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
    await queryInterface.dropTable('InterviewRoadMaps');
  }
};