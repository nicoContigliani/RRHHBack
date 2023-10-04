'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // Add seed data for the `RoadMapVacance` table
    await queryInterface.bulkInsert('RoadMapVacances', [
      {
        VacancyId: 1, // Frontend Developer vacancy
        RoadMapId: 1, // Frontend Developer roadmap
        status_RoadMapVacance: true,
        comments: 'This roadmap is required for the Frontend Developer vacancy.',
        statusProgres: 'In progress',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        VacancyId: 2, // Backend Developer vacancy
        RoadMapId: 2, // Backend Developer roadmap
        status_RoadMapVacance: true,
        comments: 'This roadmap is required for the Backend Developer vacancy.',
        statusProgres: 'In progress',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other roadmaps
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `RoadMapVacance` table
    await queryInterface.bulkDelete('RoadMapVacances', null, {});
  }
};