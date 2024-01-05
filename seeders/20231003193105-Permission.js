'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
        id: 1,
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
        audit: true,
        status_permission: true,
        createdAt: new Date('2023-10-06 12:05:25.907'),
        updatedAt: new Date('2023-10-06 12:05:25.907'),
      },
      {
        id: 2,
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
        audit: true,
        status_permission: true,
        createdAt: new Date('2023-10-06 12:05:25.907'),
        updatedAt: new Date('2023-10-06 12:05:25.907'),
      },
      {
        id: 3,
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
        audit: true,
        status_permission: true,
        createdAt: new Date('2023-10-06 12:05:25.907'),
        updatedAt: new Date('2023-10-06 12:05:25.907'),
      },
      {
        id: 4,
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
        audit: true,
        status_permission: true,
        createdAt: new Date('2023-10-06 12:05:25.907'),
        updatedAt: new Date('2023-10-06 12:05:25.907'),
      },
      {
        id: 5,
        name_permission: 'Todos',
        conditions: '',
        code: 'Todo',
        creates: true,
        reads: true,
        updates: true,
        deletes: true,
        admins: true,
        exports: true,
        imports: true,
        approve: true,
        generate_reports: true,
        configure: true,
        restrict: true,
        manage_users: true,
        manage_roles: true,
        audit: true,
        status_permission: true,
        createdAt: new Date('2023-10-06 12:05:25.907'),
        updatedAt: new Date('2023-10-06 12:05:25.907'),
      },
      // ... otras inserciones de datos en Permissions
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Permissions', null, {});
  },
};
