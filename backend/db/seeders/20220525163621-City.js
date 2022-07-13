module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Cities', [{

      title: 'Санкт-Петербург',
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {

      title: 'Москва',
      createdAt: new Date(),
      updatedAt: new Date(),

    },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Cities', null, {});
  },
};
