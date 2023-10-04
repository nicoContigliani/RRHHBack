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

    // Añadir asignaciones de CV a usuarios de ejemplo
    await queryInterface.bulkInsert('CVUsers', [
      {
        UserId: 1, // Usuario John Doe
        CVId: 1, // CV de John Doe
        status_cv_user: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... otras asignaciones de CV a usuarios de ejemplo
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('CVUsers', null, {});
  }
};
