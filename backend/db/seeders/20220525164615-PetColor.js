module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        title: 'Black',

      },
      {

        title: 'White',

      },
      {

        title: 'Ginger',

      },
      {

        title: 'Other',

      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};
