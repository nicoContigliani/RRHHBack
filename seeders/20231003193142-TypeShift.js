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

    // Add seed data for the `TypeShift` table
    await queryInterface.bulkInsert('TypeShifts', [
      {
        name_type_shift: 'Full time',
        description_type_shift: '8 hours a day, 5 days a week',
        status_type_shift: true,
        hours: 40,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name_type_shift: 'Part time',
        description_type_shift: '4 hours a day, 5 days a week',
        status_type_shift: true,
        hours: 20,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name_type_shift: 'Remote',
        description_type_shift: 'Work from home',
        status_type_shift: true,
        hours: 40,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other type shifts
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `TypeShift` table
    await queryInterface.bulkDelete('TypeShifts', null, {});
  }
};