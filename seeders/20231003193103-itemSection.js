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

    // Añadir items de secciones de ejemplo
    await queryInterface.bulkInsert('itemSections', [
      {
        ItemId: 1, // Item 1
        SectionId: 1, // Sección de experiencia laboral
        position: 1, // Primer item de la sección
        atribute: 'Software Engineer at Google',
        status_item_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        ItemId: 2, // Item 2
        SectionId: 1,
        position: 2,
        atribute: 'Developed and maintained web applications using Python, Java, and JavaScript',
        status_item_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        ItemId: 3, // Item 3
        SectionId: 2, // Sección de educación
        position: 1,
        atribute: 'Master of Science in Computer Science from Stanford University',
        status_item_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        ItemId: 4, // Item 4
        SectionId: 3, // Sección de habilidades
        position: 1,
        atribute: 'Python, Java, C/C++, SQL, NoSQL',
        status_item_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... otros items de secciones de ejemplo
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('itemSections', null, {});
  }
};