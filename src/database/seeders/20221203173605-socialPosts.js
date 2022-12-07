'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SocialPosts',
      [
        {
          id: 1,
          title: 'Post do Ano',
          content: 'Melhor post do ano',
          userId: 1,
          published: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          id: 2,
          title: 'Vamos que vamos',
          content: 'Foguete não tem ré',
          userId: 1,
          published: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SocialPosts', null, {});
  }
};
