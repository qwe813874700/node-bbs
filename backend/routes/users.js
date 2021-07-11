const express = require('express');
const router = express.Router();
const UsersController = require('../controller/users')

/* GET users listing. */
router.get('/', UsersController.users);
router.post('/register', UsersController.register)

module.exports = router;
