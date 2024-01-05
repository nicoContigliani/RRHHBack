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

    await queryInterface.bulkInsert('Interviews', [
      {
        id: 1,
        interviewDateTime: new Date('2023-08-04T10:00:00.000Z'),
        interviewTypeId: 1,
        interviewers: 'Alice, Bob',
        interviewMethod: 'Video call',
        duration: 60,
        rating: null,
        comments: null,
        inerview_result: null,
        requiredActions: null,
        nextActionDateTime: null,
        status_interview: true,
        TypeInterviewId: 1,
        createdAt: new Date('2023-10-06T12:05:25.867Z'),
        updatedAt: new Date('2023-10-06T12:05:25.867Z'),
      },
      {
        id: 2,
        interviewDateTime: new Date('2023-08-05T11:00:00.000Z'),
        interviewTypeId: 2,
        interviewers: 'Carol, Dave',
        interviewMethod: 'In person',
        duration: 120,
        rating: null,
        comments: null,
        inerview_result: null,
        requiredActions: null,
        nextActionDateTime: null,
        status_interview: true,
        TypeInterviewId: 1,
        createdAt: new Date('2023-10-06T12:05:25.867Z'),
        updatedAt: new Date('2023-10-06T12:05:25.867Z'),
      },
      // ... otras inserciones de datos en Interviews
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Interviews', null, {});
  },
};
