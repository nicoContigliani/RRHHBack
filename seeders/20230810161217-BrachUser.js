'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const branchUserSeedData = [
      {
        UserId: 1,
        BranchId: 1,
        status_branch_user: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        BranchId: 1,
        status_branch_user: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('BrachUsers', branchUserSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BrachUsers', null, {});
  }
};
