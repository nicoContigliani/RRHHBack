'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const resultTestSeedData = [
      {
        TestId: 1,  // ID del test
        ResultId: 1,  // ID del resultado
        status_result_test: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        TestId: 2,
        ResultId: 2,
        status_result_test: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más registros de prueba aquí
    ];

    await queryInterface.bulkInsert('ResultTests', resultTestSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ResultTests', null, {});
  }
};
