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

    // Add seed data for the `ResultTest` table
    await queryInterface.bulkInsert('ResultTests', [
      {
        TestId: 1, // Test 1
        ResultId: 1, // Result Passed
        status_result_test: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        TestId: 1, // Test 1
        ResultId: 2, // Result Failed
        status_result_test: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        TestId: 2, // Test 2
        ResultId: 1, // Result Passed
        status_result_test: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        TestId: 2, // Test 2
        ResultId: 2, // Result Failed
        status_result_test: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other result tests
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `ResultTest` table
    await queryInterface.bulkDelete('ResultTests', null, {});
  }
};