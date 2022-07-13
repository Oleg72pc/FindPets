module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('PetColors', [
      {
        title: 'Черный',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {

        title: 'Белый',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {

        title: 'Рыжий',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {

        title: 'Другой',
        createdAt: new Date(),
        updatedAt: new Date(),

      },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('PetColors', null, {});
  },
};
