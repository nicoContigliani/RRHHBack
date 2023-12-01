'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
        title: 'dataPerson',
        content: '',
        status_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SectionTypeId: 2, // Experiencia laboral
        title: 'descriptionPerson',
        content: '',
        status_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SectionTypeId: 3, 
        title: 'experience_work',
        content: '',
        status_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SectionTypeId: 4, 
        title: 'experience_freelancer_work',
        content: '',
        status_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SectionTypeId: 5, 
        title: 'soft_skill',
        content: '',
        status_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SectionTypeId: 6, 
        title: 'hard_skill',
        content: '',
        status_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SectionTypeId: 7,
        title: 'education',
        content: '',
        status_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SectionTypeId: 8,
        title: 'lenguaje',
        content: '',
        status_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SectionTypeId: 9,
        title: 'disponibility',
        content: '',
        status_section: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ... otras secciones
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Sections', null, {});
  }
};