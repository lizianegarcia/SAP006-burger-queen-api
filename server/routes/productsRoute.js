const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');

router.get("/", productsController.getAllProducts);
router.get("/:productId", productsController.getProductById);
router.post("/", productsController.postProduct);
router.put("/:productId", productsController.putProduct);
router.delete("/:productId", productsController.deleteProduct);

module.exports = router;