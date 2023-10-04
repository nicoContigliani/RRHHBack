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

    await queryInterface.bulkInsert('Permissions', [
      {
        name_permission: 'Crear usuarios',
        conditions: '',
        code: 'CREATE_USERS',
        creates: true,
        reads: false,
        updates: false,
        deletes: false,
        admins: true,
        exports: false,
        imports: false,
        approve: false,
        generate_reports: false,
        configure: false,
        restrict: false,
        manage_users: true,
        manage_roles: false,
        audit: false,
        status_permission: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name_permission: 'Leer usuarios',
        conditions: '',
        code: 'READ_USERS',
        creates: false,
        reads: true,
        updates: false,
        deletes: false,
        admins: false,
        exports: false,
        imports: false,
        approve: false,
        generate_reports: false,
        configure: false,
        restrict: false,
        manage_users: false,
        manage_roles: false,
        audit: false,
        status_permission: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name_permission: 'Actualizar usuarios',
        conditions: '',
        code: 'UPDATE_USERS',
        creates: false,
        reads: false,
        updates: true,
        deletes: false,
        admins: true,
        exports: false,
        imports: false,
        approve: false,
        generate_reports: false,
        configure: false,
        restrict: false,
        manage_users: true,
        manage_roles: false,
        audit: false,
        status_permission: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name_permission: 'Eliminar usuarios',
        conditions: '',
        code: 'DELETE_USERS',
        creates: false,
        reads: false,
        updates: false,
        deletes: true,
        admins: true,
        exports: false,
        imports: false,
        approve: false,
        generate_reports: false,
        configure: false,
        restrict: false,
        manage_users: true,
        manage_roles: false,
        audit: false,
        status_permission: true,
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

    await queryInterface.bulkDelete('Permissions', null, {});
  }
};