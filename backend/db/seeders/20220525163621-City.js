module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('City', [{

      title: 'St. Petersburg',

    },
    {

      title: 'Moscow',

    },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('City', null, {});
  },
};
