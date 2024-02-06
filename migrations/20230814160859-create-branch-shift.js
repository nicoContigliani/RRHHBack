'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BranchShifts', {
      id: {
        // allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BranchId: {
        type: Sequelize.BIGINT
      },
      ShiftId: {
        type: Sequelize.BIGINT
      },
      status_branch_shift: {
        type: Sequelize.BOOLEAN
      },
      present_day: {
        type: Sequelize.BOOLEAN
      },
      delay_day: {
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
    await queryInterface.dropTable('BranchShifts');
  }
};