'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const itemSeedData = [
      {
        itemTitle: 'Título del ítem 1',
        itemContent: 'Contenido del ítem 1',
        status_item: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemTitle: 'Título del ítem 2',
        itemContent: 'Contenido del ítem 2',
        status_item: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('Items', itemSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
