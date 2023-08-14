'use strict';
const { Seeder } = require('sequelize-seeder');
const models = require('./models'); // Ajusta la ruta a tus modelos
const { User } = models; // Asegúrate de que el modelo se llame "User"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataToInsert = [
      {
        email: 'ejemplo@example.com',
        password: 'contraseña',
        fullname: 'Nombre completo del usuario',
        phone: '1234567890',
        birthday: '1990-01-01', // Fecha de nacimiento en formato YYYY-MM-DD
        Score: 0, // Puntuación del usuario
        status_user: true, // Estado del usuario
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Puedes agregar más objetos de datos aquí si es necesario
    ];

    await queryInterface.bulkInsert('Users', dataToInsert, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
