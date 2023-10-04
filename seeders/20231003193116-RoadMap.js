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

    // Add seed data for the `RoadMap` table
    await queryInterface.bulkInsert('RoadMaps', [
      {
        InterviewId: 1, // Interview 1
        VacancyId: 1, // Frontend Developer vacancy
        responsibilityDescription: 'Learn the basics of HTML, CSS, and JavaScript.',
        status_roadmap: true,
        order: 1,
        required: true,
        description: 'This module will teach you the basics of HTML, CSS, and JavaScript, which are the three core technologies used to build web applications.',
        duration: 40,
        location: 'Online',
        scheduledDateTime: new Date('2023-08-05T10:00:00'),
        completionDateTime: null,
        outcome: null,
        nextSteps: null,
        nextActionDateTime: null,
        image: 'https://i.imgur.com/html-css-javascript.png',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        InterviewId: 1, // Interview 1
        VacancyId: 1, // Frontend Developer vacancy
        responsibilityDescription: 'Build a simple web application using HTML, CSS, and JavaScript.',
        status_roadmap: false,
        order: 2,
        required: true,
        description: 'In this module, you will build a simple web application using the HTML, CSS, and JavaScript skills that you learned in the previous module.',
        duration: 60,
        location: 'Online',
        scheduledDateTime: null,
        completionDateTime: null,
        outcome: null,
        nextSteps: null,
        nextActionDateTime: null,
        image: 'https://i.imgur.com/build-web-app.png',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        InterviewId: 1, // Interview 1
        VacancyId: 2, // Backend Developer vacancy
        responsibilityDescription: 'Learn the basics of Python and Django.',
        status_roadmap: true,
        order: 1,
        required: true,
        description: 'This module will teach you the basics of Python and Django, which are a popular programming language and web framework used to build backend web applications.',
        duration: 40,
        location: 'Online',
        scheduledDateTime: new Date('2023-08-06T10:00:00'),
        completionDateTime: null,
        outcome: null,
        nextSteps: null,
        nextActionDateTime: null,
        image: 'https://i.imgur.com/python-django.png',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        InterviewId: 1, // Interview 1
        VacancyId: 2, // Backend Developer vacancy
        responsibilityDescription: 'Build a simple backend web application using Python and Django.',
        status_roadmap: false,
        order: 2,
        required: true,
        description: 'In this module, you will build a simple backend web application using the Python and Django skills that you learned in the previous module.',
        duration: 60,
        location: 'Online',
        scheduledDateTime: null,
        completionDateTime: null,
        outcome: null,
        nextSteps: null,
        nextActionDateTime: null,
        image: 'https://i.imgur.com/build-backend-app.png',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other roadmaps
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `RoadMap` table
    await queryInterface.bulkDelete('RoadMaps', null, {});
  }
};