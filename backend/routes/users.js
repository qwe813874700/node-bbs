const express = require('express');
const router = express.Router();
const UsersController = require('../controller/users')

/* GET users listing. */
router.get('/', UsersController.users);
router.post('/register', UsersController.register)
router.post('/login', UsersController.login)
router.get('/getinfo', UsersController.getinfo)

module.exports = router;
