const express = require('express');
const router = express.Router();
const usersController = require('../controller/users')

/* GET users listing. */
router.get('/', usersController.users);

module.exports = router;
