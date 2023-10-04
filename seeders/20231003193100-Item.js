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

    // Añadir items de ejemplo
    await queryInterface.bulkInsert('Items', [
      {
        itemTitle: 'Software Engineer at Google',
        itemContent: 'Developed and maintained web applications using Python, Java, and JavaScript',
        status_item: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        itemTitle: 'Master of Science in Computer Science',
        itemContent: 'Stanford University',
        status_item: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        itemTitle: 'Python, Java, C/C++, SQL, NoSQL',
        itemContent: '',
        status_item: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... otros items de ejemplo
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Items', null, {});
  }
};