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

    // Add seed data for the `InterviewRoadMap` table
    await queryInterface.bulkInsert('InterviewRoadMaps', [
      {
        InterviewId: 1, // Interview 1
        RoadMapId: 1, // Frontend Developer roadmap
        status_InterviewRoadMap: true,
        comments: 'The candidate is still in the early stages of their development, but they showed a lot of potential in the interview. They have a good understanding of the basics of frontend development, and they are eager to learn more.',
        statusProgres: 'In progress',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        InterviewId: 1, // Interview 1
        RoadMapId: 2, // Backend Developer roadmap
        status_InterviewRoadMap: true,
        comments: 'The candidate has a good understanding of the basics of backend development, but they could use some more experience in certain areas. They are eager to learn more, and they have a good attitude.',
        statusProgres: 'In progress',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other interview roadmaps
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `InterviewRoadMap` table
    await queryInterface.bulkDelete('InterviewRoadMaps', null, {});
  }
};