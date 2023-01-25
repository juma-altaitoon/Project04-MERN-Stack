const express = require('express');
const router =  express.Router();

router.use(express.json());

//const isLoggedIn = require("../helper/isLoggedIn");

const carController = require('../controllers/cars');

router.post('/car/add', carsController.add_post);
router.get('/car/index', carsController.index_get); //read list
router.get('/car/edit', carsController.edit_get); //read item to edit it
router.put('/car/update', carsController.update_put);
router.delete('/car/delete', carsController.delete_delete); 

module.exports = router;