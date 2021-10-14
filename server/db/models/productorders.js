'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productOrders extends Model {
    static associate(models) {
      productOrders.belongsTo(models.Orders)
      productOrders.belongsTo(models.Products)
    }
  };
  productOrders.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productOrders',
  });
  return productOrders;
};