module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Ads', [
      {
        title: 'GhostDog',
        description: 'Его сложно найти и легко потерять',
        genderAnimal: true,
        location: 'Санкт-Петербург проспект Садовая',
        photo: 'https://c.stocksy.com/a/omP900/z9/2244078.jpg',
        spenTime: new Date(),
        lossTime: new Date(),
        isLost: true,
        isActive: true,
        // cityId: 1,
        // colorId: 1,
        // typeId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'CatSamurai',
        description: 'Школьный друг Сплинтера',
        genderAnimal: true,
        location: 'Санкт-Петербург проспект Садовая',
        photo: 'https://c.stocksy.com/a/omP900/z9/2244078.jpg',
        spenTime: new Date(),
        lossTime: new Date(),
        isLost: true,
        isActive: true,
        // cityId: 1,
        // colorId: 1,
        // typeId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Ad', null, {});
  },
};
