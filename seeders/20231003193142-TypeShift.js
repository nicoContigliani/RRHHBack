'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('TypeShifts', [{
     *   id: 1,
     *   name_type_shift: 'Full time',
     *   description_type_shift: '8 hours a day, 5 days a week',
     *   status_type_shift: true,
     *   hours: 40,
     *   createdAt: new Date('2023-10-06 12:05:25.977'),
     *   updatedAt: new Date('2023-10-06 12:05:25.978'),
     * }], {});
     */

    await queryInterface.bulkInsert('TypeShifts', [
      {
        id: 1,
        name_type_shift: 'Full time',
        description_type_shift: '8 hours a day, 5 days a week',
        status_type_shift: true,
        hours: 40,
        createdAt: new Date('2023-10-06 12:05:25.977'),
        updatedAt: new Date('2023-10-06 12:05:25.978'),
      },
      {
        id: 2,
        name_type_shift: 'Part time',
        description_type_shift: '4 hours a day, 5 days a week',
        status_type_shift: true,
        hours: 20,
        createdAt: new Date('2023-10-06 12:05:25.978'),
        updatedAt: new Date('2023-10-06 12:05:25.978'),
      },
      {
        id: 3,
        name_type_shift: 'Remote',
        description_type_shift: 'Work from home',
        status_type_shift: true,
        hours: 40,
        createdAt: new Date('2023-10-06 12:05:25.978'),
        updatedAt: new Date('2023-10-06 12:05:25.978'),
      },
      // ... otras inserciones de datos en TypeShifts
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('TypeShifts', null, {});
     */

    await queryInterface.bulkDelete('TypeShifts', null, {});
  },
};
