'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('Items', [
        { id: 100, itemTitle: 'fullname', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 101, itemTitle: 'email', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 102, itemTitle: 'phone', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 103, itemTitle: 'birthday', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 200, itemTitle: 'descriptionPerson', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 300, itemTitle: 'experience_work', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 400, itemTitle: 'experience_freelancer_work', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 500, itemTitle: 'soft_skill', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 600, itemTitle: 'hard_skill', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 700, itemTitle: 'education', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 800, itemTitle: 'lenguaje', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 900, itemTitle: 'disponibility', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 301, itemTitle: 'experience_work', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 302, itemTitle: 'experience_work', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 501, itemTitle: 'soft_skill', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 601, itemTitle: 'hard_skill', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 602, itemTitle: 'hard_skill', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 603, itemTitle: 'hard_skill', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 604, itemTitle: 'hard_skill', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 605, itemTitle: 'hard_skill', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 606, itemTitle: 'hard_skill', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 607, itemTitle: 'hard_skill', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 608, itemTitle: 'hard_skill', itemContent: '', status_item: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
      ], {});
    } catch (error) {
      console.error('Error during seed:', error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
