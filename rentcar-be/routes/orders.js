const express = require('express');
const router = express.Router();

router.use(express.json());

const isLoggedIn = require("../helper/isLoggedIn");

const ordersController = require('../controllers/orders');

router.post('/order/add', isLoggedIn, ordersController.add_post);
router.get('/order/index', isLoggedIn, ordersController.index_get); //read list
router.get('/order/edit', isLoggedIn, ordersController.edit_get); //read item to edit it
router.put('/order/update', isLoggedIn, ordersController.update_put);
router.delete('/order/delete', isLoggedIn, ordersController.delete_delete);
router.get('/order/car/index', isLoggedIn, ordersController.car_index_get); //read list
router.get('/order/user/index', isLoggedIn, ordersController.user_index_get); //read list

module.exports = router;