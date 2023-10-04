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

    await queryInterface.bulkInsert('Shifts', [
      // Turno 1
      {
        name: 'Mañana',
        start_time: '08:00:00',
        end_time: '12:00:00',
        status_shift: true,
        TypeshiptId: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // Turno 2
      {
        name: 'Tarde',
        start_time: '14:00:00',
        end_time: '18:00:00',
        status_shift: true,
        TypeshiptId: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // Turno 3
      {
        name: 'Noche',
        start_time: '20:00:00',
        end_time: '00:00:00',
        status_shift: true,
        TypeshiptId: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... otros turnos
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Shifts', null, {});
  }
};