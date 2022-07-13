module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('TypeAnimals', [{

      title: 'Собака',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Кошка',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Другое',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('TypeAnimals', null, {});
  },
};
