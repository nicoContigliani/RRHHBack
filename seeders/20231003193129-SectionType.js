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

    // Añadir tipos de secciones de ejemplo
    await queryInterface.bulkInsert('SectionTypes', [
      {
        name_section_type: 'Experiencia laboral',
        description_section_type: 'Las secciones de experiencia laboral describen tu experiencia profesional anterior.',
        status_section_type: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name_section_type: 'Educación',
        description_section_type: 'Las secciones de educación describen tu formación académica.',
        status_section_type: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name_section_type: 'Habilidades',
        description_section_type: 'Las secciones de habilidades describen tus habilidades y conocimientos.',
        status_section_type: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      // ... otros tipos de secciones
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('SectionTypes', null, {});
  }
};