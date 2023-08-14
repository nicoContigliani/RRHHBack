'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Obtener los modelos necesarios
    const { CompanyVacances } = queryInterface.sequelize.models;

    // Datos para insertar en la tabla
    const dataToInsert = [
      {
        VacancyId: 1,  // ID de la vacante
        UserId: 1,     // ID del usuario
        status_company_vacances: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    // Insertar los datos en la tabla
    await CompanyVacances.bulkCreate(dataToInsert);
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar los datos insertados en el método "up"
    await queryInterface.bulkDelete('CompanyVacances', null, {});
  }
};
