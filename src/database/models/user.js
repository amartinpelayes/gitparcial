'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //hasMany
      User.hasMany(models.Order,{
        foreignKey:'userId',
        as:"Orders"
      });

      //hasOne
      User.hasOne(models.Address);
      
     
    }
  };
  User.init({
    firstname: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    addressesId: DataTypes.INTEGER,
    ordersId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};