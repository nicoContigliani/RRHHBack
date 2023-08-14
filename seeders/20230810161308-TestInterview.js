'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { TestInterview } = models; // Asegúrate de que el modelo se llame "TestInterview"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        CandidateId: 1, // Reemplaza con el ID correspondiente del candidato
        TestId: 1, // Reemplaza con el ID correspondiente de la prueba
        interviewDateTime: new Date(),
        results: 'Resultados de la prueba 1',
        comments: 'Comentarios sobre la prueba 1',
        InterviewId: 1, // Reemplaza con el ID correspondiente de la entrevista
        status_test_inteview: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CandidateId: 2, // Reemplaza con el ID correspondiente del candidato
        TestId: 2, // Reemplaza con el ID correspondiente de la prueba
        interviewDateTime: new Date(),
        results: 'Resultados de la prueba 2',
        comments: 'Comentarios sobre la prueba 2',
        InterviewId: 2, // Reemplaza con el ID correspondiente de la entrevista
        status_test_inteview: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('TestInterviews', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TestInterviews', null, {});
  }
};
