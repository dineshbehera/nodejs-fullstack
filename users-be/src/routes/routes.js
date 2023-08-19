const express = require('express');
const controller = require('../controllers/users');
//const { body } = require('express-validator');
const router = new express.Router();

router.get('/', controller.isAlive);
router.get('/init', controller.initDatabase);
router.get('/users', controller.getUsers);
router.post('/users', controller.addUser);

module.exports = router;