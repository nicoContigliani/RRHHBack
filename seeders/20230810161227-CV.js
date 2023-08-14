'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cvSeedData = [
      {
        title: 'Currículum de Juan Pérez',
        description_cv: 'Currículum vitae de Juan Pérez con experiencia en desarrollo web.',
        status_cv: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Currículum de María Gómez',
        description_cv: 'Currículum vitae de María Gómez con experiencia en marketing.',
        status_cv: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('CVs', cvSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CVs', null, {});
  }
};
