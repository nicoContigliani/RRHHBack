'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { TypeVacancy } = models; // Asegúrate de que el modelo se llame "TypeVacancy"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const typeVacanciesData = [
      {
        name_vacancy_type: 'Tiempo Completo',
        description_vacancy_type: 'Vacante de tiempo completo con jornada laboral de 40 horas a la semana.',
        status_vacancy_type: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_vacancy_type: 'Medio Tiempo',
        description_vacancy_type: 'Vacante de medio tiempo con jornada laboral de 20 horas a la semana.',
        status_vacancy_type: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_vacancy_type: 'Prácticas Profesionales',
        description_vacancy_type: 'Oportunidad de prácticas profesionales para estudiantes en busca de experiencia laboral.',
        status_vacancy_type: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Agrega más objetos de datos aquí si es necesario
    ];

    // Inserta los datos en la tabla TypeVacancies
    await queryInterface.bulkInsert('TypeVacancies', typeVacanciesData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina los datos insertados en la tabla TypeVacancies
    await queryInterface.bulkDelete('TypeVacancies', null, {});
  }
};
