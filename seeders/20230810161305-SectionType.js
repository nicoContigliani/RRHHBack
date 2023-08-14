'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Obtener los modelos necesarios
    const { SectionType } = queryInterface.sequelize.models;

    // Datos para insertar en la tabla
    const dataToInsert = [
      {
        name_section_type: 'Tipo de Sección 1',
        description_section_type: 'Descripción del Tipo de Sección 1',
        status_section_type: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_section_type: 'Tipo de Sección 2',
        description_section_type: 'Descripción del Tipo de Sección 2',
        status_section_type: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    // Insertar los datos en la tabla
    await SectionType.bulkCreate(dataToInsert);
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar los datos insertados en el método "up"
    await queryInterface.bulkDelete('SectionType', null, {});
  }
};
