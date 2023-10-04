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

    // Añadir secciones de CV de ejemplo
    await queryInterface.bulkInsert('CVSections', [
      {
        CVId: 1, // CV de John Doe
        SectionId: 1, // Experiencia laboral
        position: 1, // Primera sección del CV
        describle_cv_section: 'Software Engineer at Google',
        status_cv_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        CVId: 1,
        SectionId: 2, // Educación
        position: 2, // Segunda sección del CV
        describle_cv_section: 'Master of Science in Computer Science from Stanford University',
        status_cv_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        CVId: 1,
        SectionId: 3, // Habilidades
        position: 3, // Tercera sección del CV
        describle_cv_section: 'Python, Java, C/C++, SQL, NoSQL',
        status_cv_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... otras secciones de CV de ejemplo
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('CVSections', null, {});
  }
};