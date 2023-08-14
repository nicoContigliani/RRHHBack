'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { TypeInterview } = models; // Asegúrate de que el modelo se llame "TypeInterview"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        name_type_interview: 'Entrevista Técnica',
        description_type_interview: 'Entrevista enfocada en habilidades técnicas',
        status_type_interview: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_type_interview: 'Entrevista de Cultura',
        description_type_interview: 'Entrevista para evaluar la adaptación a la cultura de la empresa',
        status_type_interview: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('TypeInterviews', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TypeInterviews', null, {});
  }
};
