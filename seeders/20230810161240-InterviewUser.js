'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const interviewUserSeedData = [
      {
        InterViewId: 1, // ID de la entrevista relacionada
        UserId: 1, // ID del usuario relacionado
        userDescription: 'Entrevistador principal',
        status_interview_user: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        InterViewId: 1,
        UserId: 2,
        userDescription: 'Entrevistador secundario',
        status_interview_user: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('InterviewUsers', interviewUserSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('InterviewUsers', null, {});
  }
};
