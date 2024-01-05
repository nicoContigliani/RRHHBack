'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
      {
        id: 1,
        BranchId: 1,
        ShiftId: 1,
        status_branch_shift: true,
        present_day: true,
        delay_day: false,
        createdAt: new Date('2023-10-06 12:05:25.827'),
        updatedAt: new Date('2023-10-06 12:05:25.827'),
      },
      {
        id: 2,
        BranchId: 2,
        ShiftId: 2,
        status_branch_shift: true,
        present_day: true,
        delay_day: false,
        createdAt: new Date('2023-10-06 12:05:25.827'),
        updatedAt: new Date('2023-10-06 12:05:25.827'),
      },
      {
        id: 3,
        BranchId: 3,
        ShiftId: 3,
        status_branch_shift: true,
        present_day: true,
        delay_day: false,
        createdAt: new Date('2023-10-06 12:05:25.827'),
        updatedAt: new Date('2023-10-06 12:05:25.827'),
      },
      // ... otras inserciones de datos en BranchShifts
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('BranchShifts', null, {});
  },
};
