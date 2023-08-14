'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sectionSeedData = [
      {
        SectionTypeId: 1, // ID del tipo de sección relacionado
        title: 'Presentación Personal',
        content: 'En esta sección, el candidato debe hablar sobre sí mismo.',
        status_section: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        SectionTypeId: 2,
        title: 'Preguntas Técnicas',
        content: 'En esta sección, el candidato responderá preguntas técnicas sobre el rol.',
        status_section: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('Sections', sectionSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sections', null, {});
  }
};
