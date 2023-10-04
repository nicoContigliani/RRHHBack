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

    // Add seed data for the `CompanyVacances` table
    await queryInterface.bulkInsert('CompanyVacances', [
      {
        VacancyId: 1, // Frontend Developer vacancy
        CompanyId: 1, // Google
        UserId: 1, // User John Doe
        status_company_vacances: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        VacancyId: 2, // Backend Developer vacancy
        CompanyId: 1, // Google
        UserId: 1, // User John Doe
        status_company_vacances: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other company vacancies
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `CompanyVacances` table
    await queryInterface.bulkDelete('CompanyVacances', null, {});
  }
};