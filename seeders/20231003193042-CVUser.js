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

    await queryInterface.bulkInsert('CVUsers', [
      {
        id: 1,
        UserId: 1,
        CVId: 1,
        status_cv_user: true,
        createdAt: new Date('2023-10-06 12:05:25.854'),
        updatedAt: new Date('2023-10-06 12:05:25.854'),
      },
      // ... otras inserciones de datos en CVUsers
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('CVUsers', null, {});
  },
};
