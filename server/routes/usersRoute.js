const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController');

router.get("/", usersController.getAllUsers);
router.get("/:uid", usersController.getUserById);
router.post("/", usersController.postUser);
router.put("/:uid", usersController.putUser);
router.delete("/:uid", usersController.deleteUser);

module.exports = router;