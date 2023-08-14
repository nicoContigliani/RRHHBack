'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const shiftSeedData = [
      {
        name: 'Turno Mañana',
        start_time: '08:00:00',
        end_time: '14:00:00',
        status_shift: true,
        TypeshiptId: 1, // ID del tipo de turno
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Turno Tarde',
        start_time: '14:00:00',
        end_time: '20:00:00',
        status_shift: true,
        TypeshiptId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más turnos aquí
    ];

    await queryInterface.bulkInsert('Shifts', shiftSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Shifts', null, {});
  }
};
