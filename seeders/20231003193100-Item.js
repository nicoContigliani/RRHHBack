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

    // Añadir items de ejemplo
    await queryInterface.bulkInsert('Items', [
      {
        itemTitle: 'fullname',
        itemContent: '',
        status_item: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        itemTitle: 'email',
        itemContent: '',
        status_item: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        itemTitle: 'phone',
        itemContent: '',
        status_item: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        itemTitle: 'birthday',
        itemContent: '',
        status_item: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        itemTitle: 'descriptionPerson',
        itemContent: '',
        status_item: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        itemTitle: 'soft_skill',
        itemContent: '',
        status_item: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        itemTitle: 'hard_skill',
        itemContent: '',
        status_item: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        itemTitle: 'education',
        itemContent: '',
        status_item: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        itemTitle: 'experience_work',
        itemContent: '',
        status_item: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        itemTitle: 'experience_freelancer_work',
        itemContent: '',
        status_item: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        itemTitle: 'lenguaje',
        itemContent: '',
        status_item: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        itemTitle: 'disponibility',
        itemContent: '',
        status_item: true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Items', null, {});
  }
};