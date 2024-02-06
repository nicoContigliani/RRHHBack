'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Sections', [{
     *   id: 7,
     *   SectionTypeId: 7,
     *   title: 'education',
     *   content: '',
     *   status_section: true,
     *   createdAt: new Date('2023-11-28 10:18:44.332'),
     *   updatedAt: new Date('2023-11-28 10:18:44.332')
     * }], {});
     */

    await queryInterface.bulkInsert('Sections', [
    
      {
        id: 1,
        SectionTypeId: 1,
        title: 'data Person',
        content: '',
        status_section: true,
        createdAt: new Date('2023-11-28 10:18:44.332'),
        updatedAt: new Date('2023-11-28 10:18:44.332'),
      },
      {
        id: 2,
        SectionTypeId: 2,
        title: 'description Person',
        content: '',
        status_section: true,
        createdAt: new Date('2023-11-28 10:18:44.332'),
        updatedAt: new Date('2023-11-28 10:18:44.332'),
      },
      {
        id: 3,
        SectionTypeId: 3,
        title: 'experience work',
        content: '',
        status_section: true,
        createdAt: new Date('2023-11-28 10:18:44.332'),
        updatedAt: new Date('2023-11-28 10:18:44.332'),
      },
      {
        id: 4,
        SectionTypeId: 4,
        title: 'experience freelancer',
        content: '',
        status_section: true,
        createdAt: new Date('2023-11-28 10:18:44.332'),
        updatedAt: new Date('2023-11-28 10:18:44.332'),
      },
      {
        id: 5,
        SectionTypeId: 5,
        title: 'soft skill',
        content: '',
        status_section: true,
        createdAt: new Date('2023-11-28 10:18:44.332'),
        updatedAt: new Date('2023-11-28 10:18:44.332'),
      },
      {
        id: 6,
        SectionTypeId: 6,
        title: 'hard skill',
        content: '',
        status_section: true,
        createdAt: new Date('2023-11-28 10:18:44.332'),
        updatedAt: new Date('2023-11-28 10:18:44.332'),
      },
      {
        id: 7,
        SectionTypeId: 7,
        title: 'education',
        content: '',
        status_section: true,
        createdAt: new Date('2023-11-28 10:18:44.332'),
        updatedAt: new Date('2023-11-28 10:18:44.332'),
      },
      {
        id: 8,
        SectionTypeId: 8,
        title: 'lenguaje',
        content: '',
        status_section: true,
        createdAt: new Date('2023-11-28 10:18:44.332'),
        updatedAt: new Date('2023-11-28 10:18:44.332'),
      },
      {
        id: 9,
        SectionTypeId: 9,
        title: 'disponibility',
        content: '',
        status_section: true,
        createdAt: new Date('2023-11-28 10:18:44.332'),
        updatedAt: new Date('2023-11-28 10:18:44.332'),
      },
      // ... otras inserciones de datos en Sections
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Sections', null, {});
     */

    await queryInterface.bulkDelete('Sections', null, {});
  },
};
