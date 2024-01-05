'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('InterviewVacances', [
        {
          id: 1,
          InterviewId: 1,
          VacancyId: 1,
          interviewDateTime: '2023-10-10 10:00:00.000',
          results: 'Candidate was selected',
          comments: 'Candidate was a good fit for the role',
          status_interview_vacancy_type: false,
          createdAt: '2023-10-06 12:05:25.892',
          updatedAt: '2023-10-06 12:05:25.892'
        },
        {
          id: 2,
          InterviewId: 2,
          VacancyId: 2,
          interviewDateTime: '2023-10-11 10:00:00.000',
          results: 'Candidate was not selected',
          comments: 'Candidate did not meet the requirements',
          status_interview_vacancy_type: true,
          createdAt: '2023-10-06 12:05:25.892',
          updatedAt: '2023-10-06 12:05:25.892'
        },
      ], {});
    } catch (error) {
      console.error('Error during seed:', error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('InterviewVacances', null, {});
  }
};
