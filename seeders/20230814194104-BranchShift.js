'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const branchShiftSeedData = [
      {
        BranchId: 1,
        ShiftId: 1,
        status_branch_shift: true,
        present_day: true,
        delay_day: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        BranchId: 2,
        ShiftId: 2,
        status_branch_shift: true,
        present_day: false,
        delay_day: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de BranchShift aquí
    ];

    await queryInterface.bulkInsert('BranchShifts', branchShiftSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BranchShifts', null, {});
  }
};
