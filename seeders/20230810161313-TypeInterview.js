'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const typeInterviewData = [
      {
        name_type_test: 'Entrevista Inicial',
        description_type_test: 'Primera entrevista con los candidatos.',
        status_Type_interview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_type_test: 'Entrevista Técnica',
        description_type_test: 'Entrevista técnica para evaluar habilidades.',
        status_Type_interview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('TypeInterviews', typeInterviewData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TypeInterviews', null, {});
  }
};
