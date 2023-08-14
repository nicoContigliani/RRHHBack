'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const typeTests = await queryInterface.sequelize.query(
      'SELECT id FROM TypeTests;',
      { type: Sequelize.QueryTypes.SELECT }
    );

    const testSeedData = [
      {
        typeTestId: typeTests[0].id,
        name_test: 'Prueba de Aptitud 1',
        description_test: 'Descripción de la prueba de aptitud 1.',
        status_test: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeTestId: typeTests[1].id,
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
