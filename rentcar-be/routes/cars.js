const express = require('express');
const router =  express.Router();

router.use(express.json());

const isLoggedIn = require("../helper/isLoggedIn");

const carsController = require('../controllers/cars');

router.post('/car/add', isLoggedIn, carsController.add_post);
router.get('/car/index', isLoggedIn, carsController.index_get); //read list
router.get('/car/edit', isLoggedIn, carsController.edit_get); //read item to edit it
router.put('/car/update', isLoggedIn, carsController.update_put);
router.delete('/car/delete', isLoggedIn, carsController.delete_delete); 

module.exports = router;