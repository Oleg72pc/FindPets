const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TypeAnimal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Ad }) {
      TypeAnimal.Ad = TypeAnimal.hasMany(Ad, { foreignKey: 'typeId' });
    }
  }
  TypeAnimal.init({
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
    modelName: 'TypeAnimal',
    tableName: 'TypeAnimals',
  });
  return TypeAnimal;
};
