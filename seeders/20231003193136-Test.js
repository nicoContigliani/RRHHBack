'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Tests', [{
     *   id: 1,
     *   typeTestId: 1,
     *   name_test: 'Frontend Technical Test',
     *   description_test: 'A test to assess the candidate''s frontend technical skills.',
     *   status_test: true,
     *   createdAt: new Date('2023-10-06 12:05:25.968'),
     *   updatedAt: new Date('2023-10-06 12:05:25.968'),
     * }], {});
     */

    await queryInterface.bulkInsert('Tests', [
      {
        id: 1,
        typeTestId: 1,
        name_test: 'Frontend Technical Test',
        description_test: 'A test to assess the candidate s frontend technical skills.',
        status_test: true,
        createdAt: new Date('2023-10-06 12:05:25.968'),
        updatedAt: new Date('2023-10-06 12:05:25.968'),
      },
      {
        id: 2,
        typeTestId: 1,
        name_test: 'Backend Technical Test',
        description_test: 'A test to assess the candidate s backend technical skills.',
        status_test: true,
        createdAt: new Date('2023-10-06 12:05:25.968'),
        updatedAt: new Date('2023-10-06 12:05:25.968'),
      },
      {
        id: 3,
        typeTestId: 2,
        name_test: 'Behavioral Test',
        description_test: 'A test to assess the candidate s behavioral skills.',
        status_test: true,
        createdAt: new Date('2023-10-06 12:05:25.968'),
        updatedAt: new Date('2023-10-06 12:05:25.968'),
      },
      // ... otras inserciones de datos en Tests
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Tests', null, {});
     */

    await queryInterface.bulkDelete('Tests', null, {});
  },
};
