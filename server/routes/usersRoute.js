const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController');
const { auth } = require('../controller/authController');

router.get("/", auth, usersController.getAllUsers);
router.get("/:uid", auth, usersController.getUserById);
router.post("/", auth, usersController.postUser);
router.put("/:uid", auth, usersController.putUser);
router.delete("/:uid", auth, usersController.deleteUser);

module.exports = router;