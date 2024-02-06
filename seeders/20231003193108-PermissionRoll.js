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

    await queryInterface.bulkInsert('PermissionRolls', [
      {
        id: 1,
        RoleId: 3,
        PermissionId: 1,
        status_permission_roll: true,
        createdAt: new Date('2023-10-06 12:05:25.915'),
        updatedAt: new Date('2023-10-06 12:05:25.915'),
      },
      {
        id: 2,
        RoleId: 1,
        PermissionId: 5,
        status_permission_roll: true,
        createdAt: new Date('2023-10-06 12:05:25.915'),
        updatedAt: new Date('2023-10-06 12:05:25.915'),
      },
      {
        id: 3,
        RoleId: 3,
        PermissionId: 3,
        status_permission_roll: true,
        createdAt: new Date('2023-10-06 12:05:25.915'),
        updatedAt: new Date('2023-10-06 12:05:25.915'),
      },
      {
        id: 4,
        RoleId: 3,
        PermissionId: 4,
        status_permission_roll: true,
        createdAt: new Date('2023-10-06 12:05:25.915'),
        updatedAt: new Date('2023-10-06 12:05:25.915'),
      },
      {
        id: 5,
        RoleId: 2,
        PermissionId: 2,
        status_permission_roll: true,
        createdAt: new Date('2023-10-06 12:05:25.915'),
        updatedAt: new Date('2023-10-06 12:05:25.915'),
      },
    
      // ... otras inserciones de datos en PermissionRolls
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('PermissionRolls', null, {});
  },
};
