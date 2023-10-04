'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // Añadir secciones de ejemplo
    await queryInterface.bulkInsert('Sections', [
      {
        SectionTypeId: 1, // Experiencia laboral
        title: 'Experiencia laboral en Google',
        content: 'Software Engineer',
        status_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SectionTypeId: 2, // Educación
        title: 'Master of Science in Computer Science',
        content: 'Stanford University',
        status_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        SectionTypeId: 3, // Habilidades
        title: 'Habilidades',
        content: 'Python, Java, C/C++, SQL, NoSQL',
        status_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... otras secciones
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Sections', null, {});
  }
};