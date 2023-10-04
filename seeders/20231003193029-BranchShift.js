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

    await queryInterface.bulkInsert('BranchShifts', [
      // Asignar el turno de mañana a la sucursal 1 de Google
      {
        BranchId: 1,
        ShiftId: 1,
        status_branch_shift: true,
        present_day: true,
        delay_day: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // Asignar el turno de tarde a la sucursal 2 de Microsoft
      {
        BranchId: 2,
        ShiftId: 2,
        status_branch_shift: true,
        present_day: true,
        delay_day: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // Asignar el turno de noche a la sucursal 3 de Amazon
      {
        BranchId: 3,
        ShiftId: 3,
        status_branch_shift: true,
        present_day: true,
        delay_day: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... otras asignaciones de turnos a sucursales
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('BranchShifts', null, {});
  }
};