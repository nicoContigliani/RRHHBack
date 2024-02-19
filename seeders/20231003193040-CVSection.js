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
        id: 1,
        CVId: 1,
        SectionId: 1,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 2,
        CVId: 1,
        SectionId: 2,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 3,
        CVId: 1,
        SectionId: 3,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 4,
        CVId: 1,
        SectionId: 4,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 5,
        CVId: 1,
        SectionId: 5,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 6,
        CVId: 1,
        SectionId: 6,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 7,
        CVId: 1,
        SectionId: 7,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 8,
        CVId: 1,
        SectionId: 8,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 9,
        CVId: 1,
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
