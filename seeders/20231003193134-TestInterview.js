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

    // Add seed data for the `TestInterview` table
    await queryInterface.bulkInsert('TestInterviews', [
      {
        CandidateId: 1, // Candidate John Doe
        TestId: 1, // Frontend Technical Test
        interviewDateTime: new Date('2023-08-04T10:00:00'),
        results: 'Passed',
        comments: 'The candidate performed well in the test and demonstrated a good understanding of frontend development.',
        InterviewId: 1, // Interview 1
        status_test_interview: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        CandidateId: 1, // Candidate John Doe
        TestId: 2, // Backend Technical Test
        interviewDateTime: new Date('2023-08-04T11:00:00'),
        results: 'Passed',
        comments: 'The candidate also performed well in the backend technical test and demonstrated a good understanding of backend development.',
        InterviewId: 1, // Interview 1
        status_test_interview: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other test interviews
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `TestInterview` table
    await queryInterface.bulkDelete('TestInterviews', null, {});
  }
};