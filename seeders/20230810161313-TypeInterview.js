'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const typeInterviewSeedData = [
      {
        name_type_test: 'Entrevista Técnica',
        description_type_test: 'Tipo de entrevista para evaluar habilidades técnicas.',
        status_Type_interview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_type_test: 'Entrevista de Competencias',
        description_type_test: 'Tipo de entrevista para evaluar habilidades blandas y competencias.',
        status_Type_interview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('TypeInterviews', typeInterviewSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TypeInterviews', null, {});
  }
};
