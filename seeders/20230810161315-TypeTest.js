'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { TypeTest } = models; // Asegúrate de que el modelo se llame "TypeTest"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        name_type_test: 'Tipo de Prueba 1',
        description_type_test: 'Descripción del Tipo de Prueba 1',
        status_type_test: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_type_test: 'Tipo de Prueba 2',
        description_type_test: 'Descripción del Tipo de Prueba 2',
        status_type_test: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('TypeTests', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TypeTests', null, {});
  }
};