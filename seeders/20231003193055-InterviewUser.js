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

    // Add seed data for the `InterviewUser` table
    await queryInterface.bulkInsert('InterviewUsers', [
      {
        InterviewId: 1, // Interview 1
        RoadMapId: 1, // Frontend Developer roadmap
        UserId: 1, // User John Doe
        userDescription: 'Candidate',
        status_interview_user: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        InterviewId: 1, // Interview 1
        RoadMapId: 2, // Backend Developer roadmap
        UserId: 1, // User John Doe
        userDescription: 'Candidate',
        status_interview_user: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other interview users
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `InterviewUser` table
    await queryInterface.bulkDelete('InterviewUsers', null, {});
  }
};