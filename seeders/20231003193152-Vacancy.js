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

    // Add seed data for the `Vacancy` table
    await queryInterface.bulkInsert('Vacancies', [
      {
        title: 'Frontend Developer',
        description: 'We are looking for a talented and experienced Frontend Developer to join our team. The ideal candidate will have a strong understanding of HTML, CSS, and JavaScript, as well as experience with React and TypeScript. The candidate will also be responsible for working with our team to design and develop new features for our product.',
        requirements: 'Bachelors degree in Computer Science or a related field. 2+ years of experience in frontend development. Experience with React and TypeScript is a plus.',
        responsibilities: 'Develop and maintain our frontend web applications. Work with our team to design and implement new features. Collaborate with other developers to ensure that our code is well-written and maintainable.',
        status_vacancy: true,
        TypeVacancyId: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title: 'Backend Developer',
        description: 'We are looking for a talented and experienced Backend Developer to join our team. The ideal candidate will have a strong understanding of Java, Python, or another backend programming language, as well as experience with relational databases and REST APIs. The candidate will also be responsible for working with our team to design and develop new features for our backend systems.',
        requirements: 'Bachelors degree in Computer Science or a related field. 2+ years of experience in backend development. Experience with Java, Python, or another backend programming language is a plus.',
        responsibilities: 'Develop and maintain our backend web applications. Work with our team to design and implement new features. Collaborate with other developers to ensure that our code is well-written and maintainable.',
        status_vacancy: true,
        TypeVacancyId: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... other vacancies
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Delete all seed data from the `Vacancy` table
    await queryInterface.bulkDelete('Vacancies', null, {});
  }
};