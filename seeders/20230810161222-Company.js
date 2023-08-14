'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { Company } = models; // Asegúrate de que el modelo se llame "Company"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        company: 'Compañía 1',
        companyPhone: '123-456-7890',
        companyEmail: 'info@compania1.com',
        urlCompany: 'https://www.compania1.com',
        status_company: true, // Estado de la compañía
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('Companies', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
