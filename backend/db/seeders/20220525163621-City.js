module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Cities', [{

      title: 'St. Petersburg',
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {

      title: 'Moscow',
      createdAt: new Date(),
      updatedAt: new Date(),

    },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Cities', null, {});
  },
};
