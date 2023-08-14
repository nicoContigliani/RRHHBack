'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const typeVacancySeedData = [
      {
        name_vacancy_type: 'Desarrollo',
        description_vacancy_type: 'Tipo de vacante para puestos de desarrollo de software.',
        status_vacancy_type: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_vacancy_type: 'Administración',
        description_vacancy_type: 'Tipo de vacante para puestos administrativos.',
        status_vacancy_type: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más datos de prueba aquí
    ];

    await queryInterface.bulkInsert('TypeVacancies', typeVacancySeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TypeVacancies', null, {});
  }
};
