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
        order: 1,
        required: true,
        description: 'This module will teach you the basics of HTML, CSS, and JavaScript, which are the three core technologies used to build web applications.',
        duration: 40,
        location: 'Online',
        scheduledDateTime: new Date('2023-08-05 10:00:00.000'),
        image: 'https://i.imgur.com/html-css-javascript.png',
        createdAt: new Date('2023-10-06 12:05:25.928'),
        updatedAt: new Date('2023-10-06 12:05:25.928'),
      },
      {
        id: 2,
        InterviewId: 1,
        VacancyId: 1,
        responsibilityDescription: 'Build a simple web application using HTML, CSS, and JavaScript.',
        status_roadmap: false,
        order: 2,
        required: true,
        description: 'In this module, you will build a simple web application using the HTML, CSS, and JavaScript skills that you learned in the previous module.',
        duration: 60,
        location: 'Online',
        image: 'https://i.imgur.com/build-web-app.png',
        createdAt: new Date('2023-10-06 12:05:25.928'),
        updatedAt: new Date('2023-10-06 12:05:25.928'),
      },
      {
        id: 3,
        InterviewId: 1,
        VacancyId: 2,
        responsibilityDescription: 'Learn the basics of Python and Django.',
        status_roadmap: true,
        order: 1,
        required: true,
        description: 'This module will teach you the basics of Python and Django, which are a popular programming language and web framework used to build backend web applications.',
        duration: 40,
        location: 'Online',
        scheduledDateTime: new Date('2023-08-06 10:00:00.000'),
        image: 'https://i.imgur.com/python-django.png',
        createdAt: new Date('2023-10-06 12:05:25.928'),
        updatedAt: new Date('2023-10-06 12:05:25.928'),
      },
      {
        id: 4,
        InterviewId: 1,
        VacancyId: 2,
        responsibilityDescription: 'Build a simple backend web application using Python and Django.',
        status_roadmap: false,
        order: 2,
        required: true,
        description: 'In this module, you will build a simple backend web application using the Python and Django skills that you learned in the previous module.',
        duration: 60,
        location: 'Online',
        image: 'https://i.imgur.com/build-backend-app.png',
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
