'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const interviewSeedData = [
      {
        interviewDateTime: new Date('2023-08-15 10:00:00'),
        interviewType: 'Entrevista Técnica',
        interviewers: 'Entrevistador 1, Entrevistador 2',
        interviewMethod: 'Entrevista en persona',
        duration: 60,
        rating: 4.5,
        comments: 'Buen desempeño del candidato.',
        inerview_result: 'Aprobado',
        requiredActions: 'Ninguna',
        nextActionDateTime: new Date('2023-08-20 14:00:00'),
        interview_status: true,
        TypeInterviewId: 1, // ID de tipo de entrevista relacionado
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        interviewDateTime: new Date('2023-08-17 15:30:00'),
        interviewType: 'Entrevista de Competencias',
        interviewers: 'Entrevistador 3, Entrevistador 4',
        interviewMethod: 'Entrevista virtual',
        duration: 45,
        rating: 4.2,
        comments: 'Candidato bien preparado.',
        inerview_result: 'Aprobado',
        requiredActions: 'Ninguna',
        nextActionDateTime: new Date('2023-08-20 10:00:00'),
        interview_status: true,
        TypeInterviewId: 2, // ID de otro tipo de entrevista relacionado
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('Interviews', interviewSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Interviews', null, {});
  }
};
