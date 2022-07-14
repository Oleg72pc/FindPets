const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      User, PetColor, TypeAnimal, City, Comment,
    }) {
      // Ad.User = Ad.belongsTo(User, { foreignKey: 'userId' });
      // Ad.PetColor = Ad.belongsTo(PetColor, { foreignKey: 'colorId' });
      // Ad.TypeAnimal = Ad.belongsTo(TypeAnimal, { foreignKey: 'typeId' });
      // Ad.City = Ad.belongsTo(City, { foreignKey: 'CityId' });
      Ad.Comment = Ad.hasMany(Comment, {
        foreignKey: 'adId',
        onDelete: 'cascade',
        hooks: true,
      });
    }
  }
  Ad.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    genderAnimal: {

      type: DataTypes.BOOLEAN,
    },
    location: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    photo: {
      type: DataTypes.TEXT,
      defaultValue: 'https://nic-pnb.ru/wp-content/uploads/2014/09/no-foto-2.jpg',
    },
    spenTime: {
      type: DataTypes.DATE,
    },
    lossTime: {
      type: DataTypes.DATE,
    },
    isLost: {
      type: DataTypes.BOOLEAN,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
    cityId: {
      // allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Cities',
        key: 'id',
      },
    },
    colorId: {
      // allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'PetColors',
        key: 'id',
      },
    },
    typeId: {
      // allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'TypeAnimals',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Ad',
    tableName: 'Ads',
  });
  return Ad;
};
