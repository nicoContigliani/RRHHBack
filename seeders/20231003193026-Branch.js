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

    await queryInterface.bulkInsert('Branches', [
      // Sucursal 1 de Google
      {
        name_branch: 'Googleplex',
        conditions: 'Sunny',
        idCompany: 1,
        branch_long: '-122.0840394',
        branch_lat: '37.4220041',
        branch_score: 5,
        guest: 100,
        status_branch: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // Sucursal 2 de Microsoft
      {
        name_branch: 'Microsoft Redmond',
        conditions: 'Cloudy',
        idCompany: 2,
        branch_long: '-122.1311414',
        branch_lat: '47.6396082',
        branch_score: 4,
        guest: 50,
        status_branch: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // Sucursal 3 de Amazon
      {
        name_branch: 'Amazon Seattle',
        conditions: 'Rainy',
        idCompany: 3,
        branch_long: '-122.3320708',
        branch_lat: '47.5966801',
        branch_score: 3,
        guest: 25,
        status_branch: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... otras sucursales
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Branches', null, {});
  }
};