'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const resultSeedData = [
      {
        result: 'Aprobado',
        description_result_test: 'El candidato ha aprobado el test.',
        status_result: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        result: 'Reprobado',
        description_result_test: 'El candidato no ha aprobado el test.',
        status_result: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más resultados de prueba aquí
    ];

    await queryInterface.bulkInsert('Results', resultSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Results', null, {});
  }
};
