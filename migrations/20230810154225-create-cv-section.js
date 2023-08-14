'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CVSections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CVId: {
        type: Sequelize.BIGINT
      },
      SectionId: {
        type: Sequelize.BIGINT
      },
      position: {
        type: Sequelize.BIGINT
      },
      describle_cv_section: {
        type: Sequelize.STRING
      },
      status_cv_section: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('CVSections');
  }
};