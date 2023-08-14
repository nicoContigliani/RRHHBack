'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const testSeedData = [
      {
        typeTestId: 1,
        name_test: 'Prueba de Aptitud 1',
        description_test: 'Descripción de la prueba de aptitud 1.',
        status_test: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeTestId: 2,
        name_test: 'Prueba de Aptitud 2',
        description_test: 'Descripción de la prueba de aptitud 2.',
        status_test: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('Tests', testSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tests', null, {});
  }
};
