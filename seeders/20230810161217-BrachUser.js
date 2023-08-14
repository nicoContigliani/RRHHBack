'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Asegúrate de ajustar la ruta a tus modelos
const { BrachUser } = models; // Asegúrate de que el modelo se llame "BrachUser"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        UserId: 1,
        BranchId:1,
        status_branch_user: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('BrachUsers', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BrachUsers', null, {});
  }
};