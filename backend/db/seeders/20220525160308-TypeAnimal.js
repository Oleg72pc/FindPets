module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('TypeAnimals', [{

      title: 'Dog',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Cat',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Tyrannosaurus rex',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('TypeAnimals', null, {});
  },
};
