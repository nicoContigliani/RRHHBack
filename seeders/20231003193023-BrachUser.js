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

    await queryInterface.bulkInsert('BrachUsers', [
      // Asignar la sucursal 1 de Google al usuario con ID 1
      {
        UserId: 1,
        BranchId: 1,
        status_branch_user: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // Asignar la sucursal 2 de Microsoft al usuario con ID 2
      {
        UserId: 2,
        BranchId: 2,
        status_branch_user: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // Asignar la sucursal 3 de Amazon al usuario con ID 3
      {
        UserId: 3,
        BranchId: 3,
        status_branch_user: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... otras asignaciones de sucursales a usuarios
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('BrachUsers', null, {});
  }
};