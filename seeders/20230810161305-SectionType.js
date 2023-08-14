'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sectionTypeSeedData = [
      {
        name_section_type: 'Sección de Presentación',
        description_section_type: 'Sección introductoria del proceso de entrevista',
        status_section_type: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_section_type: 'Sección de Preguntas Técnicas',
        description_section_type: 'Sección para preguntas relacionadas con habilidades técnicas',
        status_section_type: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('SectionTypes', sectionTypeSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SectionTypes', null, {});
  }
};
