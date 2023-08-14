'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { Test } = models; // Asegúrate de que el modelo se llame "Test"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        typeTestId: 1, // Reemplaza con el ID correspondiente del tipo de prueba
        name_test: 'Prueba 1',
        description_test: 'Descripción de la Prueba 1',
        status_test: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeTestId: 2, // Reemplaza con el ID correspondiente del tipo de prueba
        name_test: 'Prueba 2',
        description_test: 'Descripción de la Prueba 2',
        status_test: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('Tests', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tests', null, {});
  }
};
