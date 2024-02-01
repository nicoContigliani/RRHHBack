'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Vacancies', [{
     *   id: 1,
     *   title: 'Frontend Developer',
     *   description: 'We are looking for a talented and experienced Frontend Developer...',
     *   requirements: 'Bachelors degree in Computer Science or a related field. 2+ years of experience...',
     *   responsibilities: 'Develop and maintain our frontend web applications. Work with our team to...',
     *   status_vacancy: true,
     *   TypeVacancyId: 1,
     *   createdAt: new Date('2023-10-06 12:05:25.993'),
     *   updatedAt: new Date('2023-10-06 12:05:25.993'),
     * }], {});
     */

    await queryInterface.bulkInsert('Vacancies', [
      {
        id: 1,
        title: 'Frontend Developer',
        description:
          'We are looking for a talented and experienced Frontend Developer to join our team. The ideal candidate will have a strong understanding of HTML, CSS, and JavaScript, as well as experience with React and TypeScript. The candidate will also be responsible for working with our team to design and develop new features for our product.',
        requirements:
          'Bachelors degree in Computer Science or a related field. 2+ years of experience in frontend development. Experience with React and TypeScript is a plus.',
        responsibilities:
          'Develop and maintain our frontend web applications. Work with our team to design and implement new features. Collaborate with other developers to ensure that our code is well-written and maintainable.',
        status_vacancy_work: 'to make',
        start_vacancy: new Date('2023-10-06 12:05:25.993'),
        finish_vacancy: new Date('2023-10-06 12:05:25.993'),
        status_vacancy: true,
        location:"home office",
        TypeVacancyId: 1,
        createdAt: new Date('2023-10-06 12:05:25.993'),
        updatedAt: new Date('2023-10-06 12:05:25.993'),
      },
      {
        id: 2,
        title: 'Backend Developer',
        description:
          'We are looking for a talented and experienced Backend Developer to join our team. The ideal candidate will have a strong understanding of Java, Python, or another backend programming language, as well as experience with relational databases and REST APIs. The candidate will also be responsible for working with our team to design and develop new features for our backend systems.',
        requirements:
          'Bachelors degree in Computer Science or a related field. 2+ years of experience in backend development. Experience with Java, Python, or another backend programming language is a plus.',
        responsibilities:
          'Develop and maintain our backend web applications. Work with our team to design and implement new features. Collaborate with other developers to ensure that our code is well-written and maintainable.',
        status_vacancy_work: 'to make',
        start_vacancy: new Date('2023-10-06 12:05:25.993'),
        finish_vacancy: new Date('2023-10-06 12:05:25.993'),
        status_vacancy: true,
        status_vacancy: true,
        location:"home office",
        TypeVacancyId: 2,
        createdAt: new Date('2023-10-06 12:05:25.993'),
        updatedAt: new Date('2023-10-06 12:05:25.993'),
      },
      // ... otras inserciones de datos en Vacancies
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Vacancies', null, {});
     */

    await queryInterface.bulkDelete('Vacancies', null, {});
  },
};
