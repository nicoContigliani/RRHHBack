'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { InterviewResponsible } = models; // Asegúrate de que el modelo se llame "InterviewResponsible"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        InterViewId:1 /* ID de la entrevista */,
        UserId:1 /* ID del usuario */,
        responsibilityDescription: 'Descripción de la responsabilidad',
        status_interview_responsible: true, // Estado de la responsabilidad en la entrevista
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('InterviewResponsibles', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('InterviewResponsibles', null, {});
  }
};
