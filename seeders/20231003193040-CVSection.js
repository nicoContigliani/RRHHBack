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
        CVId: 2,
        SectionId: 1,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        CVId: 2,
        SectionId: 2,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        CVId: 2,
        SectionId: 3,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        CVId: 2,
        SectionId: 4,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        CVId: 2,
        SectionId: 5,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        CVId: 2,
        SectionId: 6,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        CVId: 2,
        SectionId: 7,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        CVId: 2,
        SectionId: 8,
        position: 1,
        describle_cv_section: '',
        status_cv_section: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        CVId: 2,
        SectionId: 9,
        position: 1,
        describle_cv_section: '',
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

//no funciona 