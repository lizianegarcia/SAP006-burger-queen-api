const express = require('express');
const router = express.Router();
const ordersController = require('../controller/ordersController')

router.get('/', ordersController.getAllOrders);
router.get('/:orderId', ordersController.getOrderById);
router.post('/', ordersController.postOrders);
router.put('/:orderId', ordersController.putOrder);
router.delete('/:orderId', ordersController.deleteOrder);

module.exports = router;