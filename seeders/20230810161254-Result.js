'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { Result } = models; // Asegúrate de que el modelo se llame "Result"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        result: 'Resultado 1',
        description_result_test: 'Descripción del Resultado 1',
        status_result: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        result: 'Resultado 2',
        description_result_test: 'Descripción del Resultado 2',
        status_result: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('Results', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Results', null, {});
  }
};
