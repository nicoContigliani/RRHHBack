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

    await queryInterface.bulkInsert('ResultTests', [
      {
        id: 1,
        TestId: 1,
        ResultId: 1,
        status_result_test: true,
        createdAt: new Date('2023-10-06 12:05:25.922'),
        updatedAt: new Date('2023-10-06 12:05:25.922'),
      },
      {
        id: 2,
        TestId: 1,
        ResultId: 2,
        status_result_test: false,
        createdAt: new Date('2023-10-06 12:05:25.922'),
        updatedAt: new Date('2023-10-06 12:05:25.922'),
      },
      {
        id: 3,
        TestId: 2,
        ResultId: 1,
        status_result_test: true,
        createdAt: new Date('2023-10-06 12:05:25.922'),
        updatedAt: new Date('2023-10-06 12:05:25.922'),
      },
      {
        id: 4,
        TestId: 2,
        ResultId: 2,
        status_result_test: false,
        createdAt: new Date('2023-10-06 12:05:25.922'),
        updatedAt: new Date('2023-10-06 12:05:25.922'),
      },
      // ... otras inserciones de datos en ResultTests
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('ResultTests', null, {});
  },
};
