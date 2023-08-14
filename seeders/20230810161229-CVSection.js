'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cvSectionSeedData = [
      {
        CVId: 1, // ID del CV relacionado
        SectionId: 1, // ID de la sección relacionada
        position: 1,
        describle_cv_section: 'Resumen de experiencia laboral',
        status_cv_section: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CVId: 1,
        SectionId: 2,
        position: 2,
        describle_cv_section: 'Habilidades técnicas',
        status_cv_section: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('CVSections', cvSectionSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CVSections', null, {});
  }
};
