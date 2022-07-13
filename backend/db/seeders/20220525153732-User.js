const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        userName: 'Admin',
        phoneNumber: '+7000123456789',
        password: await bcrypt.hash('qwerty1', 10),
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        userName: 'User',
        phoneNumber: '+7000987654321',
        password: await bcrypt.hash('qwerty2', 10),
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
