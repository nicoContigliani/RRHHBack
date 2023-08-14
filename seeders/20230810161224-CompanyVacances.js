'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const companyVacancesSeedData = [
      {
        VacancyId: 1,
        UserId: 1,
        status_company_vacances: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        VacancyId: 2,
        UserId: 2,
        status_company_vacances: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('CompanyVacances', companyVacancesSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CompanyVacances', null, {});
  }
};
