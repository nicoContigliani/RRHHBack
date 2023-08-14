'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { PermissionRoll } = models; // Asegúrate de que el modelo se llame "PermissionRoll"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        RoleId: 1, // ID del rol "Administrador"
        PermissionId: 1, // ID del permiso "Gestión de Usuarios"
        status_permission_roll: true, // Estado de la relación entre rol y permiso
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        RoleId: 2, // ID del rol "Usuario Normal"
        PermissionId: 2, // ID del permiso "Generar Informes"
        status_permission_roll: true, // Estado de la relación entre rol y permiso
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('PermissionRolls', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PermissionRolls', null, {});
  }
};
