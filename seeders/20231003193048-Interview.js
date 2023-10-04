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

    // Add seed data for the `Interview` table
    await queryInterface.bulkInsert('Interviews', [
      {
        interviewDateTime: new Date('2023-08-04T10:00:00'),
        interviewTypeId:1,
        interviewers: 'Alice, Bob',
        interviewMethod: 'Video call',
        duration: 60,
        rating: null,
        comments: null,
        inerview_result: null,
        requiredActions: null,
        nextActionDateTime: null,
        status_interview: true,
        TypeInterviewId: 1, // Technical interview type
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        interviewDateTime: new Date('2023-08-05T11:00:00'),
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
        TypeInterviewId: 1, // Technical interview type
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other interviews
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `Interview` table
    await queryInterface.bulkDelete('Interviews', null, {});
  }
};