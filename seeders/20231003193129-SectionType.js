'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('SectionTypes', [{
     *   id: 1,
     *   name_section_type: 'Data_Person',
     *   description_section_type: 'Data_Person',
     *   status_section_type: true,
     *   createdAt: new Date('2023-10-06 12:05:25.951'),
     *   updatedAt: new Date('2023-10-06 12:05:25.951')
     * }], {});
     */

    await queryInterface.bulkInsert('SectionTypes', [
      {
        id: 1,
        name_section_type: 'Data_Person',
        description_section_type: 'Data_Person',
        status_section_type: true,
        createdAt: new Date('2023-10-06 12:05:25.951'),
        updatedAt: new Date('2023-10-06 12:05:25.951'),
      },
      {
        id: 2,
        name_section_type: 'Description_Person',
        description_section_type: 'Description_Person',
        status_section_type: true,
        createdAt: new Date('2023-10-06 12:05:25.951'),
        updatedAt: new Date('2023-10-06 12:05:25.951'),
      },
      {
        id: 3,
        name_section_type: 'Experience_Work',
        description_section_type: 'Experience_Work',
        status_section_type: true,
        createdAt: new Date('2023-10-06 12:05:25.951'),
        updatedAt: new Date('2023-10-06 12:05:25.951'),
      },
      {
        id: 4,
        name_section_type: 'Experience_Frelancer Work',
        description_section_type: null,
        status_section_type: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 5,
        name_section_type: 'soft_skill',
        description_section_type: null,
        status_section_type: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 6,
        name_section_type: 'hard_skill',
        description_section_type: null,
        status_section_type: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 7,
        name_section_type: 'education',
        description_section_type: null,
        status_section_type: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 8,
        name_section_type: 'lenguaje',
        description_section_type: '',
        status_section_type: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 9,
        name_section_type: 'disponibility',
        description_section_type: '',
        status_section_type: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      // ... otras inserciones de datos en SectionTypes
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('SectionTypes', null, {});
     */

    await queryInterface.bulkDelete('SectionTypes', null, {});
  },
};
