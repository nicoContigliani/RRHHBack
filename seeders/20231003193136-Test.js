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

    // Add seed data for the `Test` table
    await queryInterface.bulkInsert('Tests', [
      {
        typeTestId: 1, // Technical test type
        name_test: 'Frontend Technical Test',
        description_test: 'A test to assess the candidate\'s frontend technical skills.',
        status_test: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        typeTestId: 1, // Technical test type
        name_test: 'Backend Technical Test',
        description_test: 'A test to assess the candidate\'s backend technical skills.',
        status_test: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        typeTestId: 2, // Behavioral test type
        name_test: 'Behavioral Test',
        description_test: 'A test to assess the candidate\'s behavioral skills.',
        status_test: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other tests
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `Test` table
    await queryInterface.bulkDelete('Tests', null, {});
  }
};