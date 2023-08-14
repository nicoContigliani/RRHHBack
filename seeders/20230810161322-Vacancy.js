'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { Vacancy, TypeVacancy } = models; // Asegúrate de que los modelos se llamen "Vacancy" y "TypeVacancy"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Obtener el ID del tipo de vacante que deseas asociar
    // const typeVacancy = await TypeVacancy.findOne({
    //   where: { name_vacancy_type: 'Tipo de Vacante Ejemplo' } // Reemplaza con el nombre correcto
    // });

    // if (!typeVacancy) {
    //   console.error('Tipo de vacante no encontrado.');
    //   return;
    // }

    const dataToInsert = [
      {
        title: 'Vacante de Desarrollador Web',
        description: 'Descripción de la vacante de desarrollador web',
        requirements: 'Requisitos para el puesto de desarrollador web',
        responsibilities: 'Responsabilidades del puesto de desarrollador web',
        status_vacancy: true,
        TypeVacancyId: typeVacancy.id, // Asociar con el tipo de vacante obtenido anteriormente
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('Vacancies', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Vacancies', null, {});
  }
};
