'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { CV } = models; // Asegúrate de que el modelo se llame "CV"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        title: 'Curriculum Vitae de Juan Pérez',
        description_cv: 'Este es el currículum vitae de Juan Pérez. Está buscando oportunidades laborales en el campo de la programación.',
        status_cv: true, // Estado del CV
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Perfil Profesional de María Gómez',
        description_cv: 'Perfil profesional de María Gómez, con experiencia en marketing digital y gestión de redes sociales.',
        status_cv: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí para otros CVs
    ];

    await queryInterface.bulkInsert('CVs', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CVs', null, {});
  }
};
