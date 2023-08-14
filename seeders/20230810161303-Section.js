'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { Section } = models; // Asegúrate de que el modelo se llame "Section"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        SectionTypeId: 1, // ID del tipo de sección
        title: 'Experiencia Laboral',
        content: 'Detalles sobre mis trabajos anteriores...',
        status_section: true, // Estado de la sección
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SectionTypeId: 2, // ID del tipo de sección
        title: 'Educación',
        content: 'Información sobre mis antecedentes educativos...',
        status_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí para otras secciones
    ];

    await queryInterface.bulkInsert('Sections', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sections', null, {});
  }
};
