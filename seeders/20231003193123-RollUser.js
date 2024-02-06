'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('RollUsers', [{
     *   UserId: 1,
     *   RoleId: 1,
     *   status_role_user: true,
     *   createdAt: new Date(),
     *   updatedAt: new Date()
     * }], {});
     */

    await queryInterface.bulkInsert('RollUsers', [
      {
        id: 1,
        UserId: 2,
        RoleId: 1,
        status_role_user: true,
        createdAt: new Date('2023-10-06 12:05:25.940'),
        updatedAt: new Date('2023-10-06 12:05:25.940'),
      },
      {
        id: 2,
        UserId: 1,
        RoleId: 2,
        status_role_user: true,
        createdAt: new Date('2023-10-06 12:05:25.940'),
        updatedAt: new Date('2023-10-06 12:05:25.940'),
      },
      {
        id: 3,
        UserId: 4,
        RoleId: 3,
        status_role_user: true,
        createdAt: new Date('2023-10-06 12:05:25.940'),
        updatedAt: new Date('2023-10-06 12:05:25.940'),
      },
      {
        id: 4,
        UserId: 3,
        RoleId: 3,
        status_role_user: true,
        createdAt: new Date('2023-10-06 12:05:25.940'),
        updatedAt: new Date('2023-10-06 12:05:25.940'),
      },
      {
        id: 5,
        UserId: 4,
        RoleId: 3,
        status_role_user: true,
        createdAt: new Date('2023-10-06 12:05:25.940'),
        updatedAt: new Date('2023-10-06 12:05:25.940'),
      },
 

      // ... otras inserciones de datos en RollUsers
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('RollUsers', null, {});
     */

    await queryInterface.bulkDelete('RollUsers', null, {});
  },
};
