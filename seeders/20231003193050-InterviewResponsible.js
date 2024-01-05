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

    await queryInterface.bulkInsert('InterviewResponsibles', [
      {
        id: 1,
        InterviewId: 1,
        RoadMapId: 1,
        UserId: 2,
        responsibilityDescription: 'Lead the interview',
        status_interview_responsible: true,
        createdAt: new Date('2023-10-06 12:05:25.873'),
        updatedAt: new Date('2023-10-06 12:05:25.873'),
      },
      {
        id: 2,
        InterviewId: 1,
        RoadMapId: 1,
        UserId: 3,
        responsibilityDescription: 'Ask technical questions',
        status_interview_responsible: true,
        createdAt: new Date('2023-10-06 12:05:25.873'),
        updatedAt: new Date('2023-10-06 12:05:25.873'),
      },
      {
        id: 3,
        InterviewId: 1,
        RoadMapId: 2,
        UserId: 4,
        responsibilityDescription: 'Lead the interview',
        status_interview_responsible: true,
        createdAt: new Date('2023-10-06 12:05:25.873'),
        updatedAt: new Date('2023-10-06 12:05:25.873'),
      },
      {
        id: 4,
        InterviewId: 1,
        RoadMapId: 2,
        UserId: 5,
        responsibilityDescription: 'Ask technical questions',
        status_interview_responsible: true,
        createdAt: new Date('2023-10-06 12:05:25.873'),
        updatedAt: new Date('2023-10-06 12:05:25.873'),
      },
      // ... otras inserciones de datos en InterviewResponsibles
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('InterviewResponsibles', null, {});
  },
};
