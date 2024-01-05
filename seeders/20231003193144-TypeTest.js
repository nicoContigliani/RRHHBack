'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('TypeTests', [
        { id: 1, name_type_test: 'Technical test', description_type_test: 'A test to assess the candidate\'s technical skills.', status_type_test: true, createdAt: '2023-10-06 12:05:25.983', updatedAt: '2023-10-06 12:05:25.983' },
        { id: 2, name_type_test: 'Behavioral test', description_type_test: 'A test to assess the candidate\'s behavioral skills.', status_type_test: true, createdAt: '2023-10-06 12:05:25.983', updatedAt: '2023-10-06 12:05:25.983' },
        { id: 3, name_type_test: 'Coding test', description_type_test: 'A test to assess the candidate\'s coding skills.', status_type_test: true, createdAt: '2023-10-06 12:05:25.983', updatedAt: '2023-10-06 12:05:25.983' },
      ], {});
    } catch (error) {
      console.error('Error during seed:', error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TypeTests', null, {});
  }
};