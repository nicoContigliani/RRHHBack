'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const typeTestData = [
      {
        name_type_test: 'Prueba de Aptitud',
        description_type_test: 'Evalúa habilidades y conocimientos específicos.',
        status_type_test: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_type_test: 'Entrevista Técnica',
        description_type_test: 'Evalúa habilidades técnicas y de resolución de problemas.',
        status_type_test: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('TypeTests', typeTestData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TypeTests', null, {});
  }
};