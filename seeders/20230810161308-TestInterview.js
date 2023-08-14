'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const testInterviewData = [
      {
        CandidateId: 1,
        TestId: 1,
        interviewDateTime: new Date('2023-08-10 14:00:00'),
        results: 'Aprobado',
        comments: 'Buen desempeño en la prueba.',
        InterviewId: 1,
        status_test_interview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CandidateId: 2,
        TestId: 2,
        interviewDateTime: new Date('2023-08-10 14:00:00'),
        results: 'Desaprobado',
        comments: 'Mal desempeño en la prueba.',
        InterviewId: 1,
        status_test_interview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('TestInterviews', testInterviewData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TestInterviews', null, {});
  }
};