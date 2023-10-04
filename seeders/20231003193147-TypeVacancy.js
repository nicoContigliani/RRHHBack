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

    // Add seed data for the `TypeVacancy` table
    await queryInterface.bulkInsert('TypeVacancies', [
      {
        name_vacancy_type: 'Frontend Developer',
        description_vacancy_type: 'A developer who specializes in the front-end of websites and web applications.',
        status_vacancy_type: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name_vacancy_type: 'Backend Developer',
        description_vacancy_type: 'A developer who specializes in the back-end of websites and web applications.',
        status_vacancy_type: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name_vacancy_type: 'Fullstack Developer',
        description_vacancy_type: 'A developer who specializes in both the front-end and back-end of websites and web applications.',
        status_vacancy_type: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other vacancy types
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `TypeVacancy` table
    await queryInterface.bulkDelete('TypeVacancies', null, {});
  }
};