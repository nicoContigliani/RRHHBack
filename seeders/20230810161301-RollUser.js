'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { RollUser } = models; // Asegúrate de que el modelo se llame "RollUser"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        UserId: 1, // ID del usuario
        RoleId: 1, // ID del rol
        status_role_user: true, // Estado de la relación entre usuario y rol
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('RollUsers', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar los datos insertados en el método "up"
    await queryInterface.bulkDelete('RollUsers', null, {});
  }
};
