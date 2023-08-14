'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { Item } = models; // Asegúrate de que el modelo se llame "Item"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        itemTitle: 'Título del ítem',
        itemContent: 'Contenido del ítem',
        status_item: true, // Estado del ítem
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('Items', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
