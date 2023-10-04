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

    // Add seed data for the `Result` table
    await queryInterface.bulkInsert('Results', [
      {
        result: 'Passed',
        description_result_test: 'Candidate passed the test with a score of 90%',
        status_result: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        result: 'Failed',
        description_result_test: 'Candidate failed the test with a score of 60%',
        status_result: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other results
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `Result` table
    await queryInterface.bulkDelete('Results', null, {});
  }
};