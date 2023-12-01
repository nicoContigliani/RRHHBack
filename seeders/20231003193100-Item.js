'use strict';


   const date = new Date();
    const isoString = date.toISOString();

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

    // Añadir items de ejemplo
 
    await queryInterface.bulkInsert('Items', [
      {
        itemTitle: 'fullname',
        itemContent: '',
        status_item: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemTitle: 'email',
        itemContent: '',
        status_item: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemTitle: 'phone',//3
        itemContent: '',
        status_item: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemTitle: 'birthday',
        itemContent: '',
        status_item: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemTitle: 'descriptionPerson',//5
        itemContent: '',
        status_item: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemTitle: 'soft_skill',
        itemContent: '',
        status_item: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemTitle: 'hard_skill',//7
        itemContent: '',
        status_item: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemTitle: 'education',//8
        itemContent: '',
        status_item: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemTitle: 'experience_work',//9
        itemContent: '',
        status_item: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemTitle: 'experience_freelancer_work',
        itemContent: '',
        status_item: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemTitle: 'lenguaje',
        itemContent: '',
        status_item: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemTitle: 'disponibility',
        itemContent: '',
        status_item: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },


    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Items', null, {});
  }
};