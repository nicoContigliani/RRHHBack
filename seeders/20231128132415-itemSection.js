'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('itemSections', [
      {
        ItemId: 1,
        SectionId: 1,
        position: 1,
        title_atribute: '',
        atribute: 'Nicolás Contigliani',
        detail_atribute: '',
        startDate: '',
        endDate: '',
        status_item_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ItemId: 2,
        SectionId: 1,
        position: 1,
        title_atribute: '',
        atribute: 'nico.contigliani@gmail.com',
        detail_atribute: '',
        startDate: '',
        endDate: '',
        status_item_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ItemId: 3,
        SectionId: 1,
        position: 1,
        title_atribute: '',
        atribute: '+5492612444106',
        detail_atribute: '',
        startDate: '',
        endDate: '',
        status_item_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ItemId: 4,
        SectionId: 1,
        position: 1,
        title_atribute: '',
        atribute: '06/03/1988',
        detail_atribute: '',
        startDate: '',
        endDate: '',
        status_item_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ItemId: 5,
        SectionId: 2,
        position: 1,
        title_atribute: '',
        atribute: 'Soy un profesional de TI con la capacidad de trabajar en equipo .Estoy trabajando con tecnologíasNode.js, React.js y base de datos relacionales como Postgres y MySQL En búsqueda de nuevos desafíos',
        detail_atribute: '',
        startDate: '',
        endDate: '',
        status_item_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ItemId: 6,
        SectionId: 5,
        position: 1,
        title_atribute: '',
        atribute: 'curioso',
        detail_atribute: '',
        startDate: '',
        endDate: '',
        status_item_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ItemId: 6,
        SectionId: 5,
        position: 1,
        title_atribute: '',
        atribute: 'responsable',
        detail_atribute: '',
        startDate: '',
        endDate: '',
        status_item_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ItemId: 7,
        SectionId: 6,
        position: 1,
        title_atribute: 'front-end',
        atribute: 'React',
        detail_atribute: '',
        startDate: '',
        endDate: '',
        status_item_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ItemId: 7,
        SectionId: 6,
        position: 1,
        title_atribute: 'front-end',
        atribute: 'MaterialUI',
        detail_atribute: '',
        startDate: '',
        endDate: '',
        status_item_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ItemId: 7,
        SectionId: 6,
        position: 1,
        title_atribute: 'Back-End',
        atribute: 'Node',
        detail_atribute: '',
        startDate: '',
        endDate: '',
        status_item_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ItemId: 7,
        SectionId: 6,
        position: 1,
        title_atribute: 'Back-End',
        atribute: 'Express',
        detail_atribute: '',
        startDate: '',
        endDate: '',
        status_item_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ItemId: 9,
        SectionId: 7,
        position: 1,
        title_atribute: 'Universidad de Palermo',
        atribute: 'Batman',
        detail_atribute: '',
        startDate: '',
        endDate: '',
        status_item_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ItemId: 8,
        SectionId: 3,
        position: 1,
        title_atribute: 'Company',
        atribute: 'Open Dev',
        detail_atribute: '',
        startDate: '',
        endDate: '',
        status_item_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
//nofunciona