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

    await queryInterface.bulkInsert('CompanyVacances', [
      {
        id: 1,
        VacancyId: 1,
        CompanyId: 1,
        UserId: 1,
        status_company_vacances: true,
        createdAt: new Date('2023-10-06 12:05:25.838'),
        updatedAt: new Date('2023-10-06 12:05:25.838'),
      },
      {
        id: 2,
        VacancyId: 2,
        CompanyId: 1,
        UserId: 1,
        status_company_vacances: true,
        createdAt: new Date('2023-10-06 12:05:25.838'),
        updatedAt: new Date('2023-10-06 12:05:25.838'),
      },
      // ... otras inserciones de datos en CompanyVacances
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('CompanyVacances', null, {});
  },
};
