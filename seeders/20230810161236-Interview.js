'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { Interview } = models; // Asegúrate de que el modelo se llame "Interview"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        interviewDateTime: new Date(),
        interviewType: 'Entrevista inicial',
        interviewers: 'Nombre de los entrevistadores',
        interviewMethod: 'Presencial',
        duration: 60, // Duración en minutos
        rating: 4.5, // Puntuación de la entrevista
        comments: 'Comentarios sobre la entrevista',
        inerview_result: 'Aprobado', // Resultado de la entrevista
        requiredActions: 'Ninguna',
        nextActionDateTime: new Date(),
        interview_status: true, // Estado de la entrevista
        TypeInterviewId:1 /* ID del tipo de entrevista */,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('Interviews', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Interviews', null, {});
  }
};
