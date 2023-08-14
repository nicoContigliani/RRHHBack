'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const itemSectionSeedData = [
      {
        ItemId: 1,
        SectionId: 1,
        position: 1,
        atribute: 'Atributo 1',
        status_item_section: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ItemId: 2,
        SectionId: 1,
        position: 2,
        atribute: 'Atributo 2',
        status_item_section: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('itemSections', itemSectionSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('itemSections', null, {});
  }
};
