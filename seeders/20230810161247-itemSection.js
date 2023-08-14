'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { itemSection } = models; // Asegúrate de que el modelo se llame "itemSection"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        ItemId:1 /* ID del ítem */,
        SectionId:1 /* ID de la sección */,
        position: 1, // Posición en la sección
        atribute: 'Atributo del ítem en la sección',
        status_item_section: true, // Estado del ítem en la sección
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('itemSections', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('itemSections', null, {});
  }
};
