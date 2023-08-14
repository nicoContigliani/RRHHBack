'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { InterviewVacance } = models; // Asegúrate de que el modelo se llame "InterviewVacance"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        InterviewId:1 /* ID de la entrevista */,
        VacancyId:1 /* ID de la vacante */,
        interviewDateTime: new Date(),
        results: 'Resultados de la entrevista',
        comments: 'Comentarios sobre la entrevista',
        status_interview_vacancy_type: true, // Estado de la relación entre entrevista y vacante
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('InterviewVacances', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('InterviewVacances', null, {});
  }
};
