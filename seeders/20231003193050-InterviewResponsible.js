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

    // Add seed data for the `InterviewResponsible` table
    await queryInterface.bulkInsert('InterviewResponsibles', [
      {
        InterviewId: 1, // Interview 1
        RoadMapId: 1, // Frontend Developer roadmap
        UserId: 2, // User Alice
        responsibilityDescription: 'Lead the interview',
        status_interview_responsible: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InterviewId: 1, // Interview 1
        RoadMapId: 1, // Frontend Developer roadmap
        UserId: 3, // User Bob
        responsibilityDescription: 'Ask technical questions',
        status_interview_responsible: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InterviewId: 1, // Interview 1
        RoadMapId: 2, // Backend Developer roadmap
        UserId: 4, // User Carol
        responsibilityDescription: 'Lead the interview',
        status_interview_responsible: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InterviewId: 1, // Interview 1
        RoadMapId: 2, // Backend Developer roadmap
        UserId: 5, // User Dave
        responsibilityDescription: 'Ask technical questions',
        status_interview_responsible: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ... other interview responsibles
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `InterviewResponsible` table
    await queryInterface.bulkDelete('InterviewResponsibles', null, {});
  }
};
