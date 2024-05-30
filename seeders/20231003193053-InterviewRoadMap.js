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
        comments: '',
        statusProgres: 'In progress',
        interviewee:"jose",
        position:"developer",
        notes:"hola",
        descriptions:"",
        createdAt: new Date('2023-10-06 12:05:25.880'),
        updatedAt: new Date('2023-10-06 12:05:25.880'),
      },
      {
        id: 2,
        InterviewId: 1,
        RoadMapId: 2,
        status_InterviewRoadMap: true,
        comments: '',
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
