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

    await queryInterface.bulkInsert('Companies', [
      {
        id: 1,
        company: 'Google',
        companyPhone: '+1 650-253-0000',
        companyEmail: 'info@google.com',
        urlCompany: 'https://www.google.com/',
        status_company: true,
        createdAt: new Date('2023-10-06 12:05:25.833'),
        updatedAt: new Date('2023-10-06 12:05:25.833'),
      },
      {
        id: 2,
        company: 'Microsoft',
        companyPhone: '+1 425-882-8080',
        companyEmail: 'info@microsoft.com',
        urlCompany: 'https://www.microsoft.com/',
        status_company: true,
        createdAt: new Date('2023-10-06 12:05:25.833'),
        updatedAt: new Date('2023-10-06 12:05:25.833'),
      },
      {
        id: 3,
        company: 'Amazon',
        companyPhone: '+1 206-266-1000',
        companyEmail: 'info@amazon.com',
        urlCompany: 'https://www.amazon.com/',
        status_company: true,
        createdAt: new Date('2023-10-06 12:05:25.833'),
        updatedAt: new Date('2023-10-06 12:05:25.833'),
      },
      // ... otras inserciones de datos en Companies
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Companies', null, {});
  },
};
