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

    // Add seed data for the `TypeTest` table
    await queryInterface.bulkInsert('TypeTests', [
      {
        name_type_test: 'Technical test',
        description_type_test: 'A test to assess the candidate\'s technical skills.',
        status_type_test: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_type_test: 'Behavioral test',
        description_type_test: 'A test to assess the candidate\'s behavioral skills.',
        status_type_test: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name_type_test: 'Coding test',
        description_type_test: 'A test to assess the candidate\'s coding skills.',
        status_type_test: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other type tests
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `TypeTest` table
    await queryInterface.bulkDelete('TypeTests', null, {});
  }
};