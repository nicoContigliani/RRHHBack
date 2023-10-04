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

    await queryInterface.bulkInsert('Roles', [
      {
        name_role: 'Administrador',
        status_role: true,
        description_role: 'Rol con todos los permisos',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name_role: 'Usuario',
        status_role: true,
        description_role: 'Rol con permisos básicos',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... otros roles
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Roles', null, {});
  }
};