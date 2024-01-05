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

    await queryInterface.bulkInsert('Results', [
      {
        id: 1,
        result: 'Passed',
        description_result_test: 'Candidate passed the test with a score of 90%',
        status_result: true,
        createdAt: new Date('2023-10-06 12:05:25.919'),
        updatedAt: new Date('2023-10-06 12:05:25.919'),
      },
      {
        id: 2,
        result: 'Failed',
        description_result_test: 'Candidate failed the test with a score of 60%',
        status_result: false,
        createdAt: new Date('2023-10-06 12:05:25.919'),
        updatedAt: new Date('2023-10-06 12:05:25.919'),
      },
      // ... otras inserciones de datos en Results
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Results', null, {});
  },
};
