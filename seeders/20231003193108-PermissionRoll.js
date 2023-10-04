'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('PermissionRolls', [
      // Permisos para el rol de administrador
      {
        RoleId: 1,
        PermissionId: 1,
        status_permission_roll: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        RoleId: 1,
        PermissionId: 2,
        status_permission_roll: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        RoleId: 1,
        PermissionId: 3,
        status_permission_roll: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        RoleId: 1,
        PermissionId: 4,
        status_permission_roll: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... otros permisos
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('PermissionRolls', null, {});
  }
};