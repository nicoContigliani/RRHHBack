'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const interviewResponsibleSeedData = [
      {
        InterViewId: 1, // ID de la entrevista relacionada
        UserId: 3, // ID del usuario responsable relacionado
        responsibilityDescription: 'Responsable de programar la entrevista',
        status_interview_responsible: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        InterViewId: 1,
        UserId: 4,
        responsibilityDescription: 'Responsable de coordinar la logística',
        status_interview_responsible: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('InterviewResponsibles', interviewResponsibleSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('InterviewResponsibles', null, {});
  }
};
