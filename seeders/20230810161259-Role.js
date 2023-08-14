'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { Role } = models; // Asegúrate de que el modelo se llame "Role"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const rolesToInsert = [
      {
        name_role: 'Administrador',
        status_role: true, // Estado del rol
        description_role: 'Rol con acceso completo y privilegios de administración',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_role: 'Usuario Normal',
        status_role: true, // Estado del rol
        description_role: 'Rol con funcionalidades limitadas para usuarios regulares',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más roles de ejemplo aquí si es necesario
    ];

    await queryInterface.bulkInsert('Roles', rolesToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
