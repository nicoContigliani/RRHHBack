'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('TypeInterviews', [{
     *   id: 1,
     *   name_type_test: 'Technical interview',
     *   description_type_test: 'A test to assess the candidate''s technical skills.',
     *   status_Type_interview: true,
     *   createdAt: new Date('2023-10-06 12:05:25.971'),
     *   updatedAt: new Date('2023-10-06 12:05:25.971'),
     * }], {});
     */

    await queryInterface.bulkInsert('TypeInterviews', [
      {
        id: 1,
        name_type_test: 'Technical interview',
        description_type_test: 'A test to assess the candidate s technical skills.',
        status_Type_interview: true,
        createdAt: new Date('2023-10-06 12:05:25.971'),
        updatedAt: new Date('2023-10-06 12:05:25.971'),
      },
      {
        id: 2,
        name_type_test: 'Behavioral interview',
        description_type_test: 'A test to assess the candidate s behavioral skills.',
        status_Type_interview: true,
        createdAt: new Date('2023-10-06 12:05:25.971'),
        updatedAt: new Date('2023-10-06 12:05:25.971'),
      },
      {
        id: 3,
        name_type_test: 'Coding interview',
        description_type_test: 'A test to assess the candidate coding skills.',
        status_Type_interview: true,
        createdAt: new Date('2023-10-06 12:05:25.971'),
        updatedAt: new Date('2023-10-06 12:05:25.971'),
      },
      // ... otras inserciones de datos en TypeInterviews
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('TypeInterviews', null, {});
     */

    await queryInterface.bulkDelete('TypeInterviews', null, {});
  },
};
