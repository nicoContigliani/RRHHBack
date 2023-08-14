'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { ResultTest } = models; // Asegúrate de que el modelo se llame "ResultTest"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        TestId:1 /* ID del test */,
        ResultId:1 /* ID del resultado */,
        status_result_test: true, // Estado de la relación entre test y resultado
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('ResultTests', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ResultTests', null, {});
  }
};
