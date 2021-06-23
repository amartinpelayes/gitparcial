'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongsto
      Address.belongsTo(models.User,{
        foreignKey:'addressesId',
        as:"users"
      });
      //belongsTo
      Address.belongsTo(models.Order,{
        foreignKey:'addressesId',
        as:"orders"
      });

    }
  };
  Address.init({
    street: DataTypes.STRING,
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};