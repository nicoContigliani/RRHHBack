'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const branchSeedData = [
      {
        name_branch: 'Sucursal A',
        conditions: 'Condiciones de la sucursal A',
        idCompany: 1,
        branch_long: '123.456',
        branch_lat: '78.910',
        branch_score: 4,
        guest: 10,
        status_branch: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_branch: 'Sucursal B',
        conditions: 'Condiciones de la sucursal B',
        idCompany: 2,
        branch_long: '987.654',
        branch_lat: '54.321',
        branch_score: 3,
        guest: 15,
        status_branch: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('Branches', branchSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Branches', null, {});
  }
};
