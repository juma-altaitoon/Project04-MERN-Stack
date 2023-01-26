const express = require('express');
const router = express.Router();

router.use(express.json());

const isLoggedIn = require("../helper/isLoggedIn");

const ordersController = require('../controllers/orders');

router.post('/order/add', ordersController.add_post);
router.get('/order/index',isLoggedIn, ordersController.index_get); //read list
router.get('/order/edit', ordersController.edit_get); //read item to edit it
router.put('/order/update', ordersController.update_put);
router.delete('/order/delete', ordersController.delete_delete); 

module.exports = router;