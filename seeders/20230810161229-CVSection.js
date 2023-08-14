'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { CVSection } = models; // Asegúrate de que el modelo se llame "CVSection"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        CVId: 1, // ID del CV
        SectionId: 1, // ID de la sección
        position: 1, // Posición en la sección
        describle_cv_section: 'Descripción de la sección del CV',
        status_cv_section: true, // Estado de la sección del CV
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CVId: 1,
        SectionId: 2,
        position: 2,
        describle_cv_section: 'Otra descripción de sección del CV',
        status_cv_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí para otras secciones del CV
    ];

    await queryInterface.bulkInsert('CVSections', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CVSections', null, {});
  }
};
