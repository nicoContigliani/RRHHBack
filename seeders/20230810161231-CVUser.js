'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { CVUser } = models; // Asegúrate de que el modelo se llame "CVUser"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        UserId: 1, // ID del usuario
        CVId: 1,  // ID del CV
        status_cv_user: true, // Estado de la relación entre usuario y CV
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2, // ID del usuario
        CVId: 2,  // ID del CV
        status_cv_user: true, // Estado de la relación entre usuario y CV
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('CVUsers', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CVUsers', null, {});
  }
};
