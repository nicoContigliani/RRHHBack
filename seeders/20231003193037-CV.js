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

    await queryInterface.bulkInsert('CVs', [
      {
        id: 1,
        title: 'cv_John Doe',
        description_cv: 'Este es el CV de John Doe.',
        status_cv: true,
        createdAt: new Date('2023-10-06 12:05:25.843'),
        updatedAt: new Date('2023-10-06 12:05:25.843'),
      },
      {
        id: 3,
        title: 'cv_Pedro Contigliani',
        description_cv: 'cv Pedro Leonardo',
        status_cv: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 2,
        title: 'cv_Nicolas Contigliani',
        description_cv: 'Este es el CV de Nicolas Contigliani',
        status_cv: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      {
        id: 4,
        title: 'cv_Macarena Contigliani',
        description_cv: 'cv Macarena Cecilia',
        status_cv: true,
        createdAt: new Date('2025-03-11 00:00:00.000'),
        updatedAt: new Date('2025-03-11 00:00:00.000'),
      },
      // ... otras inserciones de datos en CVs
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('CVs', null, {});
  },
};
