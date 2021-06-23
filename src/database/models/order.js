'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //belongsTo
      Order.belongsTo(models.User);
      //hasOne
      Order.hasOne(models.State);
      //hasOne
      Order.hasOne(models.Shipping);
      //hasMany
      Order.hasMany(models.OrderDetailsId,{
        foreignkey:'orderId',
        as:"orderdetails"
      });
      
      
      // belongsto
      Order.belongsTo(models.Payment,{
        foreignKey:'orderId',
        as:"payements"
      });
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    payments_Id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    user_addressesId: DataTypes.INTEGER,
    statesId: DataTypes.INTEGER,
    shippingsId: DataTypes.INTEGER,
    orderDetailsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};