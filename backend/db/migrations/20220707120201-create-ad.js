module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      genderAnimal: {

        type: Sequelize.BOOLEAN,
      },
      location: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      photo: {
        type: Sequelize.TEXT,
        defaultValue: 'https://nic-pnb.ru/wp-content/uploads/2014/09/no-foto-2.jpg',
      },
      spenTime: {
        type: Sequelize.DATE,
      },
      lossTime: {
        type: Sequelize.DATE,
      },
      isLost: {
        type: Sequelize.BOOLEAN,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
      },
      colorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PetColors',
          key: 'id',
        },
      },
      cityId: {
        // allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities',
          key: 'id',
        },
      },

      typeId: {
        // allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TypeAnimals',
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ads');
  },
};
