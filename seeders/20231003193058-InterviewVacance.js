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

    // Add seed data for the `InterviewVacance` table
    await queryInterface.bulkInsert('InterviewVacances', [
      {
        InterviewId: 1, // Interview 1
        VacancyId: 1, // Frontend Developer vacancy
        interviewDateTime: new Date('2023-10-10T10:00:00'),
        results: 'Candidate was selected',
        comments: 'Candidate was a good fit for the role',
        status_interview_vacancy_type: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        InterviewId: 2, // Interview 2
        VacancyId: 2, // Backend Developer vacancy
        interviewDateTime: new Date('2023-10-11T10:00:00'),
        results: 'Candidate was not selected',
        comments: 'Candidate did not meet the requirements',
        status_interview_vacancy_type: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other interview vacancies
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `InterviewVacance` table
    await queryInterface.bulkDelete('InterviewVacances', null, {});
  }
};