module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('PetColors', [
      {
        title: 'Black',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {

        title: 'White',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {

        title: 'Ginger',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {

        title: 'Other',
        createdAt: new Date(),
        updatedAt: new Date(),

      },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('PetColors', null, {});
  },
};
