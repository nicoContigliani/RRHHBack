'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('CVSections', [
      {
        id: 5,
        CVId: 2,
        SectionId: 1,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 6,
        CVId: 2,
        SectionId: 2,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 7,
        CVId: 2,
        SectionId: 3,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 8,
        CVId: 2,
        SectionId: 4,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 9,
        CVId: 2,
        SectionId: 5,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 10,
        CVId: 2,
        SectionId: 6,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 11,
        CVId: 2,
        SectionId: 7,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 12,
        CVId: 2,
        SectionId: 8,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 13,
        CVId: 2,
        SectionId: 9,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      // ... otras inserciones de datos en CVSections
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('CVSections', null, {});
  },
};
