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

    await queryInterface.bulkInsert('InterviewRoadMaps', [
      {
        id: 1,
        InterviewId: 1,
        RoadMapId: 1,
        status_InterviewRoadMap: true,
        comments: 'The candidate is still in the early stages of their development, but they showed a lot of potential in the interview. They have a good understanding of the basics of frontend development, and they are eager to learn more.',
        statusProgres: 'In progress',
        interviewee:"jose",
        position:"developer",
        notes:"hola",
        createdAt: new Date('2023-10-06 12:05:25.880'),
        updatedAt: new Date('2023-10-06 12:05:25.880'),
      },
      {
        id: 2,
        InterviewId: 1,
        RoadMapId: 2,
        status_InterviewRoadMap: true,
        comments: 'The candidate has a good understanding of the basics of backend development, but they could use some more experience in certain areas. They are eager to learn more, and they have a good attitude.',
        statusProgres: 'In progress',
        interviewee:"jose",
        position:"developer",
        notes:"hola",
        createdAt: new Date('2023-10-06 12:05:25.880'),
        updatedAt: new Date('2023-10-06 12:05:25.880'),
      },
      // ... otras inserciones de datos en InterviewRoadMaps
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('InterviewRoadMaps', null, {});
  },
};
