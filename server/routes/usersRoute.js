const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController');
const authController = require('../controller/authController');


router.get("/", authController.auth, usersController.getAllUsers);
router.get("/:uid", authController.auth, usersController.getUserById);
router.post("/", authController.auth, usersController.postUser);
router.put("/:uid", authController.auth, usersController.putUser);
router.delete("/:uid", authController.auth, usersController.deleteUser);

module.exports = router;