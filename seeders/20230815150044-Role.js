'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const rollSeedData = [
      {
        name_role: 'Admin',
        status_role: true, // Estado del rol
        description_role: 'Administrador del sistema',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_role: 'Employed',
        status_role: true, // Estado del rol
        description_role: 'Employed del sistema',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_role: 'Customer',
        status_role: true, // Estado del rol
        description_role: 'Customer del sistema',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('Roles', rollSeedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar los datos insertados en el método "up"
    await queryInterface.bulkDelete('Roles', null, {});
  }
};

