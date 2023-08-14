'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const permissionRollSeedData = [
      {
        RoleId: 1, // ID de un rol existente
        PermissionId: 1, // ID de un permiso existente
        status_permission_roll: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        RoleId: 2, // ID de otro rol existente
        PermissionId: 2, // ID de otro permiso existente
        status_permission_roll: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de relaciones de permisos y roles aquí
    ];

    await queryInterface.bulkInsert('PermissionRolls', permissionRollSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PermissionRolls', null, {});
  }
};
