'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
class productOrders extends Model {
    static associate(models) {
    }
  };
  productOrders.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productOrders',
    tableName: 'productOrders'
  });
  return productOrders;
};