const express = require('express');
const router =  express.Router();

router.use(express.json());

//const isLoggedIn = require("../helper/isLoggedIn");

const usersController = require('../controllers/users');

router.post('/user/add', usersController.add_post);
router.get('/user/index', usersController.index_get); //read list
router.get('/user/edit', usersController.edit_get); //read item to edit it
router.put('/user/update', usersController.update_put);
router.delete('/user/delete', usersController.delete_delete); 
router.post('/user/login', usersController.login_post);

module.exports = router;