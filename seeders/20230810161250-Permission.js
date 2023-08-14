'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const permissionSeedData = [
      {
        name_permission: 'Permission 1',
        conditions: 'Some conditions for permission 1',
        code: 'PERM001',
        creates: true,
        reads: true,
        updates: false,
        deletes: false,
        admins: true,
        exports: true,
        imports: false,
        approve: true,
        generate_reports: true,
        configure: false,
        restrict: false,
        manage_users: true,
        manage_roles: true,
        audit: true,
        status_permission: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_permission: 'Permission 2',
        conditions: 'Some conditions for permission 2',
        code: 'PERM002',
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
        restrict: false,
        manage_users: true,
        manage_roles: true,
        audit: true,
        status_permission: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de permisos aquí
    ];

    await queryInterface.bulkInsert('Permissions', permissionSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
