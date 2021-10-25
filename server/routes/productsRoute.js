const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');
const { auth } = require('../controller/authController');

router.get("/", productsController.getAllProducts);
router.get("/:productId", auth, productsController.getProductById);
router.post("/", auth, productsController.postProduct);
router.put("/:productId", auth, productsController.putProduct);
router.delete("/:productId", auth, productsController.deleteProduct);

module.exports = router;