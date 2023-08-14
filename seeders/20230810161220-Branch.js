'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { Branch } = models; // Asegúrate de que el modelo se llame "Branch"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        name_branch: 'Sucursal 1',
        conditions: 'Condiciones de la sucursal 1',
        idCompany: 1, // ID de la compañía correspondiente
        branch_long: '123.456789', // Longitud de ubicación
        branch_lat: '12.345678', // Latitud de ubicación
        branch_score: 4, // Puntuación de la sucursal
        guest: 100, // Número de invitados
        status_branch: true, // Estado de la sucursal
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('Branches', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Branches', null, {});
  }
};
