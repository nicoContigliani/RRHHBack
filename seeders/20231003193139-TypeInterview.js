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

    // Add seed data for the `TypeInterview` table
    await queryInterface.bulkInsert('TypeInterviews', [
      {
        name_type_test: 'Technical interview',
        description_type_test: 'A test to assess the candidate\'s technical skills.',
        status_Type_interview: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name_type_test: 'Behavioral interview',
        description_type_test: 'A test to assess the candidate\'s behavioral skills.',
        status_Type_interview: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name_type_test: 'Coding interview',
        description_type_test: 'A test to assess the candidate\'s coding skills.',
        status_Type_interview: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other interview types
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `TypeInterview` table
    await queryInterface.bulkDelete('TypeInterviews', null, {});
  }
};