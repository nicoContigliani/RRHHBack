'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const companySeedData = [
      {
        company: 'Empresa 1',
        companyPhone: '123-456-7890',
        companyEmail: 'empresa1@example.com',
        urlCompany: 'http://www.empresa1.com',
        status_company: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company: 'Empresa 2',
        companyPhone: '987-654-3210',
        companyEmail: 'empresa2@example.com',
        urlCompany: 'http://www.empresa2.com',
        status_company: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('Companies', companySeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
