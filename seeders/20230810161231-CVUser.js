'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cvUserSeedData = [
      {
        UserId: 1,
        CVId: 1,
        status_cv_user: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        CVId: 2,
        status_cv_user: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('CVUsers', cvUserSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CVUsers', null, {});
  }
};
