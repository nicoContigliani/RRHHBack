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

    await queryInterface.bulkInsert('RoadMaps', [
      {
        id: 1,
        InterviewId: 1,
        VacancyId: 1,
        responsibilityDescription: 'Learn the basics of HTML, CSS, and JavaScript.',
        status_roadmap: true,
        required: true,
        description: 'This module will teach you the basics of HTML, CSS, and JavaScript, which are the three core technologies used to build web applications.',
        duration: 40,
        location: 'Online',
        scheduledDateTime: new Date('2023-08-05 10:00:00.000'),
        start_DateTime: new Date('2023-08-05 10:00:00.000'),
        finish_DateTime: new Date('2023-08-05 10:00:00.000'),
        completionDateTime: new Date('2023-08-05 10:00:00.000'),
        outcome: "s",
        before_steps: "4",
        after_steps: "5",
        nextActionDateTime: new Date('2023-08-05 10:00:00.000'),
        image: 'https://i.imgur.com/html-css-javascript.png',
        all_Steps: 5,
        order_Steps: 5,
        createdAt: new Date('2023-10-06 12:05:25.928'),
        updatedAt: new Date('2023-10-06 12:05:25.928'),
      },
      {
        id: 2,
        InterviewId: 1,
        VacancyId: 1,
        responsibilityDescription: 'Build a simple web application using HTML, CSS, and JavaScript.',
        status_roadmap: false,
        required: true,
        description: 'This module will teach you the basics of HTML, CSS, and JavaScript, which are the three core technologies used to build web applications.',
        duration: 40,
        location: 'Online',
        scheduledDateTime: new Date('2023-08-05 10:00:00.000'),
        start_DateTime: new Date('2023-08-05 10:00:00.000'),
        finish_DateTime: new Date('2023-08-05 10:00:00.000'),
        completionDateTime: new Date('2023-08-05 10:00:00.000'),
        outcome: "s",
        before_steps: "4",
        after_steps: "5",
        nextActionDateTime: new Date('2023-08-05 10:00:00.000'),
        image: 'https://i.imgur.com/html-css-javascript.png',
        all_Steps: 5,
        order_Steps: 5,
        createdAt: new Date('2023-10-06 12:05:25.928'),
        updatedAt: new Date('2023-10-06 12:05:25.928'),
      },
      {
        id: 3,
        InterviewId: 1,
        VacancyId: 2,
        responsibilityDescription: 'Learn the basics of Python and Django.',
        status_roadmap: true,
        required: true,
        description: 'This module will teach you the basics of HTML, CSS, and JavaScript, which are the three core technologies used to build web applications.',
        duration: 40,
        location: 'Online',
        scheduledDateTime: new Date('2023-08-05 10:00:00.000'),
        start_DateTime: new Date('2023-08-05 10:00:00.000'),
        finish_DateTime: new Date('2023-08-05 10:00:00.000'),
        completionDateTime: new Date('2023-08-05 10:00:00.000'),
        outcome: "s",
        before_steps: "4",
        after_steps: "5",
        nextActionDateTime: new Date('2023-08-05 10:00:00.000'),
        image: 'https://i.imgur.com/html-css-javascript.png',
        all_Steps: 5,
        order_Steps: 5,
        createdAt: new Date('2023-10-06 12:05:25.928'),
        updatedAt: new Date('2023-10-06 12:05:25.928'),
      },
      {
        id: 4,
        InterviewId: 1,
        VacancyId: 2,
        responsibilityDescription: 'Build a simple backend web application using Python and Django.',
        status_roadmap: false,
        required: true,
        description: 'This module will teach you the basics of HTML, CSS, and JavaScript, which are the three core technologies used to build web applications.',
        duration: 40,
        location: 'Online',
        scheduledDateTime: new Date('2023-08-05 10:00:00.000'),
        start_DateTime: new Date('2023-08-05 10:00:00.000'),
        finish_DateTime: new Date('2023-08-05 10:00:00.000'),
        completionDateTime: new Date('2023-08-05 10:00:00.000'),
        outcome: "s",
        before_steps: "4",
        after_steps: "5",
        nextActionDateTime: new Date('2023-08-05 10:00:00.000'),
        image: 'https://i.imgur.com/html-css-javascript.png',
        all_Steps: 5,
        order_Steps: 5,
        createdAt: new Date('2023-10-06 12:05:25.928'),
        updatedAt: new Date('2023-10-06 12:05:25.928'),
      },
      // ... otras inserciones de datos en RoadMaps
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('RoadMaps', null, {});
  },
};
