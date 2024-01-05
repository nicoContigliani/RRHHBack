'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Users', [{
     *   id: 1,
     *   email: 'pedro.contigliani@gmail.com',
     *   password: '$2b$10$GWhyks1u.no4/GxgS8miGe7bxY1fOKKz5lKJTj8UEqKGRbVSvCNRi',
     *   fullname: 'Leonardo Contigliani',
     *   phone: '+549261444106',
     *   birthday: '06/03/2000',
     *   Score: 1000,
     *   status_user: true,
     *   createdAt: new Date('2023-10-06 12:16:19.094'),
     *   updatedAt: new Date('2023-10-06 12:16:19.094'),
     * }], {});
     */

    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        email: 'pedro.contigliani@gmail.com',
        password: '$2b$10$GWhyks1u.no4/GxgS8miGe7bxY1fOKKz5lKJTj8UEqKGRbVSvCNRi',
        fullname: 'Leonardo Contigliani',
        phone: '+549261444106',
        birthday: '06/03/2000',
        Score: 1000,
        status_user: true,
        createdAt: new Date('2023-10-06 12:16:19.094'),
        updatedAt: new Date('2023-10-06 12:16:19.094'),
      },
      {
        id: 2,
        email: 'nico.contigliani@gmail.com',
        password: '$2b$10$gdqfPR.vZJxx4WX3cER8TuGpqowlzZckHEPx27wh9enTcH7FKsG3G',
        fullname: 'Nicolas Contigliani',
        phone: '+549261444106',
        birthday: '06/03/2000',
        Score: 1000,
        status_user: true,
        createdAt: new Date('2023-10-06 12:16:43.941'),
        updatedAt: new Date('2023-10-06 12:16:43.941'),
      },
      {
        id: 3,
        email: 'macarena.contigliani@gmail.com',
        password: '$2b$10$paXyy7SN2j3bn/2BLH1QW.8NeFuuJaw7rXHziB6LxoecW2wJ/GBOm',
        fullname: 'Macarena Contigliani',
        phone: '+549261444106',
        birthday: '06/03/2000',
        Score: 1000,
        status_user: true,
        createdAt: new Date('2023-10-06 12:17:01.270'),
        updatedAt: new Date('2023-10-06 12:17:01.270'),
      },
      {
        id: 4,
        email: 'leonardo.contigliani@gmail.com',
        password: '$2b$10$ZpG64STfwRmdFe5ZsNIIPe0P6BnzsNPmS1ubP3fKUiJxw7umfzWuS',
        fullname: 'Leonardo Contigliani',
        phone: '+549261444106',
        birthday: '06/03/2000',
        Score: 1000,
        status_user: true,
        createdAt: new Date('2023-10-06 12:17:20.605'),
        updatedAt: new Date('2023-10-06 12:17:20.605'),
      },
      {
        id: 5,
        email: 'simon.contigliani@gmail.com',
        password: '$2b$10$nD/dNKKzNl1Cn5a/4oJITOJaIm/KbzE0kyAeVtxQ7CgCCHh80eRYe',
        fullname: 'Simon Contigliani',
        phone: '+549261444106',
        birthday: '06/03/2000',
        Score: 1000,
        status_user: true,
        createdAt: new Date('2023-10-06 12:17:38.070'),
        updatedAt: new Date('2023-10-06 12:17:38.070'),
      },
      // ... otras inserciones de datos en Users
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Users', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {});
  },
};
