module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Ads', [
      {
        title: 'missing',
        description: 'Его сложно найти и легко потерять',
        genderAnimal: true,
        location: 'Санкт-Петербург проспект Ленина',
        photo: 'https://infospot.ru/uploads/posts/2021-08/1629321338_ispugannaja-evropejskaja-korotkosherstnaja-koshka.jpg',
        spenTime: new Date(),
        lossTime: new Date(),
        isLost: true,
        isActive: true,
        cityId: 1,
        colorId: 1,
        typeId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'found',
        description: 'Школьный друг Сплинтера',
        genderAnimal: true,
        location: 'Санкт-Петербург проспект Восстания',
        photo: 'https://vplate.ru/images/article/orig/2019/04/korotkosherstnye-porody-koshek-vidy-vybor-i-osobennosti-uhoda.jpg',
        spenTime: new Date(),
        lossTime: new Date(),
        isLost: true,
        isActive: true,
        cityId: 1,
        colorId: 1,
        typeId: 1,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'missing',
        description: 'good boy',
        genderAnimal: true,
        location: 'Санкт-Петербург проспект Большевиков',
        photo: 'https://www.vokrug.tv/pic/product/b/9/1/7/b91731ed3e87ecaaf1fa09df1c509743.jpg',
        spenTime: new Date(),
        lossTime: new Date(),
        isLost: true,
        isActive: true,
        cityId: 1,
        colorId: 1,
        typeId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'missing',
        description: 'сметано-жор',
        genderAnimal: true,
        location: 'Санкт-Петербург проспект Ленинский',
        photo: 'https://moika78.ru/news2/2020/03/cat-2934720_1280-1024x682.jpg',
        spenTime: new Date(),
        lossTime: new Date(),
        isLost: true,
        isActive: true,
        cityId: 1,
        colorId: 1,
        typeId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: 'found',
        description: 'Его сложно найти и легко потерять',
        genderAnimal: true,
        location: 'МГА',
        photo: 'https://mnogo-krolikov.ru/wp-content/uploads/2019/03/http-lookw-ru-8-828-1476173737-cats-wallpapers-3.jpeg',
        spenTime: new Date(),
        lossTime: new Date(),
        isLost: true,
        isActive: true,
        cityId: 1,
        colorId: 1,
        typeId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'missing',
        description: 'Школьный друг Сплинтера',
        genderAnimal: true,
        location: 'Мурино',
        photo: 'https://cats-world.ru/wp-content/uploads/2020/07/post_5beca015ed56d-e1596041797777.jpg',
        spenTime: new Date(),
        lossTime: new Date(),
        isLost: true,
        isActive: true,
        cityId: 1,
        colorId: 1,
        typeId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'found',
        description: 'Его сложно найти и легко потерять',
        genderAnimal: true,
        location: 'Шушары',
        photo: 'https://mobimg.b-cdn.net/v3/fetch/45/45242fac6b33978eb63240f69fb16106.jpeg',
        spenTime: new Date(),
        lossTime: new Date(),
        isLost: true,
        isActive: true,
        cityId: 1,
        colorId: 1,
        typeId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'missing',
        description: 'Школьный друг Сплинтера',
        genderAnimal: true,
        location: 'Всеволожск',
        photo: 'https://cdn.fishki.net/upload/post/2016/12/02/2153008/chihuahua-na-lugu.jpg',
        spenTime: new Date(),
        lossTime: new Date(),
        isLost: true,
        isActive: true,
        cityId: 1,
        colorId: 1,
        typeId: 1,
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
