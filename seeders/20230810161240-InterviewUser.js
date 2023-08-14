'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { InterviewUser } = models; // Asegúrate de que el modelo se llame "InterviewUser"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        InterViewId:1 /* ID de la entrevista */,
        UserId:1 /* ID del usuario */,
        userDescription: 'Descripción del usuario en la entrevista',
        status_interview_user: true, // Estado de la relación entre usuario y entrevista
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('InterviewUsers', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('InterviewUsers', null, {});
  }
};
