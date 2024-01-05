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

    await queryInterface.bulkInsert('InterviewUsers', [
      {
        id: 1,
        InterviewId: 1,
        RoadMapId: 1,
        UserId: 1,
        userDescription: 'Candidate',
        status_interview_user: true,
        createdAt: new Date('2023-10-06 12:05:25.888'),
        updatedAt: new Date('2023-10-06 12:05:25.888'),
      },
      {
        id: 2,
        InterviewId: 1,
        RoadMapId: 2,
        UserId: 1,
        userDescription: 'Candidate',
        status_interview_user: true,
        createdAt: new Date('2023-10-06 12:05:25.888'),
        updatedAt: new Date('2023-10-06 12:05:25.888'),
      },
      // ... otras inserciones de datos en InterviewUsers
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('InterviewUsers', null, {});
  },
};
