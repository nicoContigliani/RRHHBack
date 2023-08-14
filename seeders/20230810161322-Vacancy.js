'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const vacancySeedData = [
      {
        title: 'Desarrollador Frontend',
        description: 'Descripción de la vacante para desarrollador frontend.',
        requirements: 'Experiencia en HTML, CSS y JavaScript.',
        responsibilities: 'Diseñar y desarrollar interfaces de usuario.',
        status_vacancy: true,
        TypeVacancyId: 1, // ID del tipo de vacante relacionado
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Analista de Datos',
        description: 'Descripción de la vacante para analista de datos.',
        requirements: 'Conocimiento en análisis de datos y herramientas estadísticas.',
        responsibilities: 'Analizar datos para tomar decisiones informadas.',
        status_vacancy: true,
        TypeVacancyId: 2, // ID de otro tipo de vacante relacionado
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('Vacancies', vacancySeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Vacancies', null, {});
  }
};
