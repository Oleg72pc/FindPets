module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Locations', [{

      title: 'Dog',
    },
    {
      title: 'Cat',
    },
    {
      title: 'Tyrannosaurus rex',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
