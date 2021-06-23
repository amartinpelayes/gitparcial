'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //belongsTo
      Products.belongsTo(models.Brand);
      //belongsTo
      Products.belongsTo(models.Category);
      //belongsTo
      Products.belongsTo(models.Gender);
    }
  };
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    brandsId: DataTypes.INTEGER,
    categoriesId: DataTypes.INTEGER,
    gendersId: DataTypes.INTEGER,
    imagesId: DataTypes.INTEGER,
    orderDetailsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};