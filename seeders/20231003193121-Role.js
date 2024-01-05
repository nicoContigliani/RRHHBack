'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Roles', [{
     *   name_role: 'Administrator',
     *   status_role: true,
     *   description_role: 'Role with all permissions',
     *   createdAt: new Date(),
     *   updatedAt: new Date()
     * }], {});
     */

    await queryInterface.bulkInsert('Roles', [
      {
        id: 1,
        name_role: 'Administrador',
        status_role: true,
        description_role: 'Rol con todos los permisos',
        createdAt: new Date('2023-10-06 12:05:25.937'),
        updatedAt: new Date('2023-10-06 12:05:25.937'),
      },
      {
        id: 2,
        name_role: 'Usuario',
        status_role: true,
        description_role: 'Rol con permisos básicos',
        createdAt: new Date('2023-10-06 12:05:25.937'),
        updatedAt: new Date('2023-10-06 12:05:25.937'),
      },
      {
        id: 3,
        name_role: 'Empleado',
        status_role: true,
        description_role: 'Empleado',
        createdAt: new Date('2023-10-06 12:05:25.937'),
        updatedAt: new Date('2023-10-06 12:05:25.937'),
      },
      // ... otras inserciones de datos en Roles
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Roles', null, {});
     */

    await queryInterface.bulkDelete('Roles', null, {});
  },
};
