'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Aquí necesitarás tener la información de los usuarios y roles que deseas asociar
    const rollUserSeedData = [
      {
        UserId: 1, // ID del usuario
        RoleId: 1, // ID del rol
        status_role_user: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        RoleId: 2,
        status_role_user: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más asociaciones aquí
    ];

    await queryInterface.bulkInsert('RollUsers', rollUserSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('RollUsers', null, {});
  }
};
