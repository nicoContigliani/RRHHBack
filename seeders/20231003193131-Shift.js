'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Shifts', [{
     *   id: 1,
     *   name: 'Mañana',
     *   start_time: '08:00:00',
     *   end_time: '12:00:00',
     *   status_shift: true,
     *   TypeshiptId: 1,
     *   createdAt: new Date('2023-10-06 12:05:25.956'),
     *   updatedAt: new Date('2023-10-06 12:05:25.956'),
     * }], {});
     */

    await queryInterface.bulkInsert('Shifts', [
      {
        id: 1,
        name: 'Mañana',
        start_time: '08:00:00',
        end_time: '12:00:00',
        status_shift: true,
        TypeshiptId: 1,
        createdAt: new Date('2023-10-06 12:05:25.956'),
        updatedAt: new Date('2023-10-06 12:05:25.956'),
      },
      {
        id: 2,
        name: 'Tarde',
        start_time: '14:00:00',
        end_time: '18:00:00',
        status_shift: true,
        TypeshiptId: 1,
        createdAt: new Date('2023-10-06 12:05:25.956'),
        updatedAt: new Date('2023-10-06 12:05:25.956'),
      },
      {
        id: 3,
        name: 'Noche',
        start_time: '20:00:00',
        end_time: '00:00:00',
        status_shift: true,
        TypeshiptId: 1,
        createdAt: new Date('2023-10-06 12:05:25.956'),
        updatedAt: new Date('2023-10-06 12:05:25.956'),
      },
      // ... otras inserciones de datos en Shifts
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Shifts', null, {});
     */

    await queryInterface.bulkDelete('Shifts', null, {});
  },
};
