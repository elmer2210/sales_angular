const express = require('express');
const mongose = require('mongoose');
const CustomerController = require('../controllers/customer')

const router = express.Router();

//Create customer
router.get('/all', CustomerController.findAllCustomer);
router.get('/customer/:id', CustomerController.findCustomer);
router.post('/add', CustomerController.createCustomer);
router.put('/update/:id', CustomerController.updateCustomers);

module.exports = router;

/* (req, res) => {
    const customer = CustomerSchema(req.body);
    customer.save()
    .then((data) => res.json({
        'data': data, 
        'menssage': 'el cliente fue creado correactamente',
        'success': 'success'
    }))
    .catch((err) => res.json({
        'data': err, 
        'menssage': 'No se pudo crear el cliente',
        'success': 'Error'
    }) */