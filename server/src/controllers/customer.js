const mongose = require('mongoose');
const CustomerSchema = require("../models/Customer");

const findAllCustomer = (req, res) => {
    CustomerSchema.find((err, data)=>{
        err && res.status(500).json({"menssage":err, 
        "status": 500,"success": "Failed"});

        res.status(200).json({"data": data, 
        "menssage": "Clientes Encontrado", 
        "success": "successfull", 
        "status": 200})    
    }); 
};

const findCustomer = (req, res) => {
    const {id} = req.params;
    CustomerSchema.findById({_id: id}, (err, data)=> {
        err && res.status(500).json({"menssage":err, 
        "status": 500,"success": "Failed"});

        res.status(200).json({"data": data, 
        "menssage": "Cliente Encontrado", 
        "success": "successfull", 
        "status": 200})   
    })
}

const createCustomer = (req, res) => {
    let customer = new CustomerSchema({
        c_first_name: req.body.c_first_name,
        c_last_name: req.body.c_last_name,
        c_phone: req.body.c_phone,
        c_street: req.body.c_street,
        c_zip_code: req.body.c_zip_code,
    })

    customer.save((err, data) => {
        err && res.status(500).json({"menssage":err, 
        "status": 500,"success": "Failed"});

        res.status(200).json({"data": data, 
        "menssage": "Cliente Creado", "success": "successfull"})
    });    
};

const updateCustomers = (req, res) => {
    const {id} = req.params;
    let {c_first_name,c_last_name,c_phone,c_street, c_zip_code} = req.body;

    CustomerSchema.updateOne({_id: id}, 
        {$set: {c_first_name, c_last_name, c_phone, c_street, c_zip_code}}, (err, data) => {
            err && res.status(500).json({"menssage":err, 
            "status": 500,"success": "Failed"});
    
            res.status(200).json({"data": data, 
            "menssage": "Cliente Editado", "success": "successfull"})
        });
}

module.exports = {findAllCustomer, findCustomer, createCustomer, updateCustomers};