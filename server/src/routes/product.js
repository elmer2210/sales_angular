const express = require('express');
const mongose = require('mongoose');
const ProductController = require('../controllers/product')

const router = express.Router();

//Routes
router.get('/all', ProductController.findAllProduct);
router.post('/add', ProductController.createProduct);
router.put('/update/:id', ProductController.updateProduct);

module.exports = router;