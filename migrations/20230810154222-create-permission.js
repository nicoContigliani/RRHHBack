'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Permissions', {
      id: {
        // allowNull: false,
        unique: true, // Ensure uniqueness        
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_permission: {
        type: Sequelize.STRING
      },
      conditions: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      creates: {
        type: Sequelize.BOOLEAN
      },
      reads: {
        type: Sequelize.BOOLEAN
      },
      updates: {
        type: Sequelize.BOOLEAN
      },
      deletes: {
        type: Sequelize.BOOLEAN
      },
      admins: {
        type: Sequelize.BOOLEAN
      },
      exports: {
        type: Sequelize.BOOLEAN
      },
      imports: {
        type: Sequelize.BOOLEAN
      },
      approve: {
        type: Sequelize.BOOLEAN
      },
      generate_reports: {
        type: Sequelize.BOOLEAN
      },
      configure: {
        type: Sequelize.BOOLEAN
      },
      restrict: {
        type: Sequelize.BOOLEAN
      },
      manage_users: {
        type: Sequelize.BOOLEAN
      },
      manage_roles: {
        type: Sequelize.BOOLEAN
      },
      audit: {
        type: Sequelize.BOOLEAN
      },
      status_permission: {
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
    await queryInterface.dropTable('Permissions');
  }
};