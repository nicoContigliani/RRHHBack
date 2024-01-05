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

    await queryInterface.bulkInsert('RoadMapVacances', [
      {
        id: 1,
        VacancyId: 1,
        RoadMapId: 1,
        status_RoadMapVacance: true,
        comments: 'This roadmap is required for the Frontend Developer vacancy.',
        statusProgres: 'In progress',
        createdAt: new Date('2023-10-06 12:05:25.932'),
        updatedAt: new Date('2023-10-06 12:05:25.932'),
      },
      {
        id: 2,
        VacancyId: 2,
        RoadMapId: 2,
        status_RoadMapVacance: true,
        comments: 'This roadmap is required for the Backend Developer vacancy.',
        statusProgres: 'In progress',
        createdAt: new Date('2023-10-06 12:05:25.932'),
        updatedAt: new Date('2023-10-06 12:05:25.932'),
      },
      // ... otras inserciones de datos en RoadMapVacances
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('RoadMapVacances', null, {});
  },
};
