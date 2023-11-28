'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('itemSections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ItemId: {
        type: Sequelize.BIGINT
      },
      SectionId: {
        type: Sequelize.BIGINT
      },
      position: {
        type: Sequelize.BIGINT
      },
      title_atribute: {
        type: Sequelize.STRING
      },
      atribute: {
        type: Sequelize.STRING
      },
      detail_atribute: {
        type: Sequelize.STRING
      },
      status_item_section: {
        type: Sequelize.BOOLEAN
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('itemSections');
  }
};