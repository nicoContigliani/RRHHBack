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

    await queryInterface.bulkInsert('RollUsers', [
      // Asignar el rol de administrador al usuario con ID 1
      {
        UserId: 1,
        RoleId: 1,
        status_role_user: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // Asignar el rol de usuario al usuario con ID 2
      {
        UserId: 2,
        RoleId: 2,
        status_role_user: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... otras asignaciones de roles
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('RollUsers', null, {});
  }
};