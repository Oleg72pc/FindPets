module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Ads',
      [
        {
          title: 'Потерялся',
          description:
            'Пропала собака. Порода чихуахуа, окрас черный с рыжими и белыми подпалами.',
          genderAnimal: true,
          location: 'Санкт-Петербург проспект Ленина',
          photo:
            'http://zabavniks.com/wp-content/uploads/Foto_prazhskogo_krysarika_1_03024920.jpg',
          spenTime: new Date(),
          lossTime: new Date(),
          isLost: false,
          isActive: true,
          cityId: 1,
          colorId: 1,
          typeId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Нашелся',
          description:
            'Ребят, всем привет. Нашлась собака в парке. Окрас беж.',
          genderAnimal: true,
          location: 'Санкт-Петербург Таврическая улица',
          photo:
            'https://demascotas.info/wp-content/uploads/2020/08/perro-peque%C3%B1o-no-crece-800x800.jpg',
          spenTime: new Date(),
          lossTime: new Date(),
          isLost: true,
          isActive: true,
          cityId: 1,
          colorId: 1,
          typeId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Потерялся',
          description:
            'Длинношерстная кошка, черепашковый окрас, пятно рыжего цвета на мордочке.',
          genderAnimal: true,
          location: 'Санкт-Петербург улица Садовая',
          photo: 'https://koshka-pushinka.ru/wp-content/uploads/2019/10/Smuzi-14.jpg',
          spenTime: new Date(),
          lossTime: new Date(),
          isLost: false,
          isActive: true,
          cityId: 1,
          colorId: 1,
          typeId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Нашелся',
          description:
            'В тяжёлом состоянии, истощена кошечка',
          genderAnimal: true,
          location: 'Санкт-Петербург улица Федора Абрамова',
          photo: 'https://e-news.su/uploads/posts/2017-05/1494619865_e-news.su_14_2.jpg',
          spenTime: new Date(),
          lossTime: new Date(),
          isLost: true,
          isActive: true,
          cityId: 1,
          colorId: 1,
          typeId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Потерялся',
          description:
            'Потерялась морская свинка! Вышли погулять, скрылась в траве и убежала!',
          genderAnimal: true,
          location: 'Санкт-Петербург проспект Энгельса',
          photo: 'https://ae01.alicdn.com/kf/HTB1Bm2Xc3aTBuNjSszfq6xgfpXaD/-.jpg',
          spenTime: new Date(),
          lossTime: new Date(),
          isLost: false,
          isActive: true,
          cityId: 1,
          colorId: 1,
          typeId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Нашелся',
          description:
            'Всем привет! Нашла недалеко от радиаторной будки шиншилу!',
          genderAnimal: true,
          location: 'Санкт-Петербург улица Мичманская',
          photo:
            'https://pro-dachnikov.com/uploads/posts/2021-10/thumbs/1633875046_4-p-shinshilla-domashnyaya-zhivotnoe-foto-4.jpg',
          spenTime: new Date(),
          lossTime: new Date(),
          isLost: true,
          isActive: true,
          cityId: 1,
          colorId: 1,
          typeId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Нашелся',
          description:
            'Нашла во дворе карликового кролика! Окрас серый с белыми пятнами.',
          genderAnimal: true,
          location: 'Санкт-Петербург улица Пестеля',
          photo:
            'https://img3.aksam.com.tr/fotogaleri/galeri/2021/09/20/20092021163213758255af1550.jpg',
          spenTime: new Date(),
          lossTime: new Date(),
          isLost: true,
          isActive: true,
          cityId: 1,
          colorId: 1,
          typeId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Потерялся',
          description:
            'Потерялся хомяк. Рыжий. Спокойный, неконфликтный. ',
          genderAnimal: true,
          location: 'Санкт-Петербург проспект Ленина',
          photo:
            'https://imageproxy.ifunny.co/noop/user_photos/a743247ba36c8e0144b1716d85a0bf8e06934fe3_0.jpg',
          spenTime: new Date(),
          lossTime: new Date(),
          isLost: false,
          isActive: true,
          cityId: 1,
          colorId: 1,
          typeId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Потерялся',
          description:
            'Пропала собака. Порода Корги! Очень спокойный пес, любит людей!',
          genderAnimal: true,
          location: 'Москва улица Обручева',
          photo: 'https://ae01.alicdn.com/kf/HTB17XNQXELrK1Rjy0Fjq6zYXFXaP/-.jpg',
          spenTime: new Date(),
          lossTime: new Date(),
          isLost: false,
          isActive: true,
          cityId: 2,
          colorId: 1,
          typeId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Нашелся',
          description:
            'Ребят, всем привет. Нашлась собака . Кабель около 7 лет. Окрас черный',
          genderAnimal: true,
          location: 'Москва шоссе Энтузиастов',
          photo: 'https://pets24.info/wp-content/uploads/beauce-shepherd-800x800.jpg',
          spenTime: new Date(),
          lossTime: new Date(),
          isLost: true,
          isActive: true,
          cityId: 2,
          colorId: 1,
          typeId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Потерялся',
          description:
            'Пропал домашний попугай! Проветривал окно, вылетелю. Далеко улететь не мог, так как крылья подрезаны!',
          genderAnimal: true,
          location: 'Москва Олимпийский проспект',
          photo:
            'https://public-assets.production.noteflight.com/coverArts/000/000/540/662/tmp_image20191102-3503-1621rkv.jpeg',
          spenTime: new Date(),
          lossTime: new Date(),
          isLost: false,
          isActive: true,
          cityId: 2,
          colorId: 1,
          typeId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Нашелся',
          description:
            'Нашла коробку и рядом с ней черепашку. Хозяин отзовись в комментах!',
          genderAnimal: true,
          location: 'Москва Пятницкое шоссе',
          photo:
            'https://cherepah.ru/wp-content/uploads/8/1/d/81d17fe85fb3c72a777d07f7dd1b4542.jpg',
          spenTime: new Date(),
          lossTime: new Date(),
          isLost: true,
          isActive: true,
          cityId: 2,
          colorId: 1,
          typeId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Потерялся',
          description:
            'Пропала кошка. Отзывается на кличку Камилла. Спокойная, домашня.',
          genderAnimal: true,
          location: 'Москва Егорьевское шоссе',
          photo:
            'https://chudo-prirody.com/uploads/posts/2021-08/thumbs/1628680155_85-p-britantsi-koshki-foto-93.jpg',
          spenTime: new Date(),
          lossTime: new Date(),
          isLost: false,
          isActive: true,
          cityId: 2,
          colorId: 1,
          typeId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Нашелся',
          description:
            'Ребят, привет. Найдена кошка. Полупушистая. Полностью белая.Испугана.',
          genderAnimal: true,
          location: 'Москва Дмитровское шоссе',
          photo:
            'https://img-fotki.yandex.ru/get/3207/311695.6d5/0_aa6f9_3b24ae06_XL.jpg',
          spenTime: new Date(),
          lossTime: new Date(),
          isLost: true,
          isActive: true,
          cityId: 2,
          colorId: 1,
          typeId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Ad', null, {});
  },
};
