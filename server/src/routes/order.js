const express = require('express');
const mongose = require('mongoose');
const OrderController = require('../controllers/order')

const router = express.Router();

//Routes
router.get('/all', OrderController.findAllOrder);
router.post('/add', OrderController.createOrder);
router.put('/update/:id', OrderController.updateOrder);

module.exports = router;