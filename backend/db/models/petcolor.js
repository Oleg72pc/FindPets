const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PetColor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Ad }) {
      PetColor.Ad = PetColor.hasMany(Ad, { foreignKey: 'colorId' });
    }
  }
  PetColor.init({
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
    modelName: 'PetColor',
    tableName: 'PetColors',
  });
  return PetColor;
};
