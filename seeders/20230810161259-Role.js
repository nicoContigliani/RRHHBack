'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const roleSeedData = [
      {
        name_role: 'Admin',
        status_role: true,
        description_role: 'Administrator role',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_role: 'User',
        status_role: true,
        description_role: 'Regular user role',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más roles aquí
    ];

    await queryInterface.bulkInsert('Roles', roleSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
