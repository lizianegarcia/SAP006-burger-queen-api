const express = require('express');
const router = express.Router();
const ordersController = require('../controller/ordersController');
const { auth } = require('../controller/authController');


router.get('/', auth,  ordersController.getAllOrders);
router.get('/:orderId', auth, ordersController.getOrderById);
router.post('/', auth, ordersController.postOrders);
router.put('/:orderId', auth, ordersController.putOrder);
router.delete('/:orderId', auth, ordersController.deleteOrder);

module.exports = router;