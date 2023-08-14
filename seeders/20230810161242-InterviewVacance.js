'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const interviewVacanceSeedData = [
      {
        InterviewId: 1, // ID de la entrevista relacionada
        VacancyId: 1,   // ID de la vacante relacionada
        interviewDateTime: new Date('2023-08-25 11:30:00'),
        results: 'Aprobado',
        comments: 'Candidato cumple con los requisitos.',
        status_interview_vacancy_type: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        InterviewId: 2, // ID de otra entrevista relacionada
        VacancyId: 2,   // ID de otra vacante relacionada
        interviewDateTime: new Date('2023-08-28 09:00:00'),
        results: 'Rechazado',
        comments: 'Candidato no tiene experiencia suficiente.',
        status_interview_vacancy_type: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('InterviewVacances', interviewVacanceSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('InterviewVacances', null, {});
  }
};
