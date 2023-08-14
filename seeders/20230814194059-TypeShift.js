'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const typeShiftSeedData = [
      {
        name_type_shift: 'Turno Diurno',
        description_type_shift: 'Turno que abarca las horas del día',
        status_type_shift: true,
        hours: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_type_shift: 'Turno Nocturno',
        description_type_shift: 'Turno que abarca las horas de la noche',
        status_type_shift: true,
        hours: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más tipos de turnos aquí
    ];

    await queryInterface.bulkInsert('TypeShifts', typeShiftSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TypeShifts', null, {});
  }
};
