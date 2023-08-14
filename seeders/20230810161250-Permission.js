'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { Permission } = models; // Asegúrate de que el modelo se llame "Permission"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        name_permission: 'Gestión de Usuarios',
        conditions: 'Permite gestionar usuarios del sistema',
        code: 'manage_users',
        creates: true,
        reads: true,
        updates: true,
        deletes: true,
        admins: true,
        exports: false,
        imports: false,
        approve: false,
        generate_reports: true,
        configure: false,
        restrict: false,
        manage_users: true,
        manage_roles: true,
        audit: true,
        status_permission: true, // Estado del permiso
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_permission: 'Generar Informes',
        conditions: 'Permite generar informes y reportes',
        code: 'generate_reports',
        creates: false,
        reads: true,
        updates: false,
        deletes: false,
        admins: false,
        exports: true,
        imports: false,
        approve: false,
        generate_reports: true,
        configure: false,
        restrict: false,
        manage_users: false,
        manage_roles: false,
        audit: true,
        status_permission: true, // Estado del permiso
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('Permissions', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
