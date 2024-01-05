'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('TestInterviews', [{
     *   id: 1,
     *   CandidateId: 1,
     *   TestId: 1,
     *   interviewDateTime: new Date('2023-08-04 10:00:00.000'),
     *   results: 'Passed',
     *   comments: 'The candidate performed well in the test and demonstrated a good understanding of frontend development.',
     *   InterviewId: 1,
     *   status_test_interview: true,
     *   createdAt: new Date('2023-10-06 12:05:25.959'),
     *   updatedAt: new Date('2023-10-06 12:05:25.959'),
     * }], {});
     */

    await queryInterface.bulkInsert('TestInterviews', [
      {
        id: 1,
        CandidateId: 1,
        TestId: 1,
        interviewDateTime: new Date('2023-08-04 10:00:00.000'),
        results: 'Passed',
        comments: 'The candidate performed well in the test and demonstrated a good understanding of frontend development.',
        InterviewId: 1,
        status_test_interview: true,
        createdAt: new Date('2023-10-06 12:05:25.959'),
        updatedAt: new Date('2023-10-06 12:05:25.959'),
      },
      {
        id: 2,
        CandidateId: 1,
        TestId: 2,
        interviewDateTime: new Date('2023-08-04 11:00:00.000'),
        results: 'Passed',
        comments: 'The candidate also performed well in the backend technical test and demonstrated a good understanding of backend development.',
        InterviewId: 1,
        status_test_interview: true,
        createdAt: new Date('2023-10-06 12:05:25.959'),
        updatedAt: new Date('2023-10-06 12:05:25.959'),
      },
      // ... otras inserciones de datos en TestInterviews
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('TestInterviews', null, {});
     */

    await queryInterface.bulkDelete('TestInterviews', null, {});
  },
};
