'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('TypeVacancies', [
        { id: 1, name_vacancy_type: 'Frontend Developer', description_vacancy_type: 'A developer who specializes in the front-end of websites and web applications.', status_vacancy_type: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 2, name_vacancy_type: 'Backend Developer', description_vacancy_type: 'A developer who specializes in the back-end of websites and web applications.', status_vacancy_type: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 3, name_vacancy_type: 'Fullstack Developer', description_vacancy_type: 'A developer who specializes in both the front-end and back-end of websites and web applications.', status_vacancy_type: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
      ], {});
    } catch (error) {
      console.error('Error during seed:', error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TypeVacancies', null, {});
  }
};