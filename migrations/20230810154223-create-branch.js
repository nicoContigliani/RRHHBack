'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Branches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_branch: {
        type: Sequelize.STRING
      },
      conditions: {
        type: Sequelize.STRING
      },
      idCompany: {
        type: Sequelize.BIGINT
      },
      branch_long: {
        type: Sequelize.STRING
      },
      branch_lat: {
        type: Sequelize.STRING
      },
      branch_score: {
        type: Sequelize.INTEGER
      },
      guest: {
        type: Sequelize.INTEGER
      },
      status_branch: {
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
    await queryInterface.dropTable('Branches');
  }
};