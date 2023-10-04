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

    // Añadir CVs de ejemplo
    await queryInterface.bulkInsert('CVs', [
      {
        title: 'CV de John Doe',
        description_cv: 'Este es el CV de John Doe.',
        status_cv: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... otros CVs de ejemplo
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('CVs', null, {});
  }
};