const mongose = require('mongoose');
const ProductSchema = require("../models/Product");

const findAllProduct = (req, res) => {
    ProductSchema.find((err, data)=>{
        err && res.status(500).json({"menssage":err, 
        "status": 500,"success": "Failed"});

        res.status(200).json({"data": data, 
        "menssage": "Producto Encontrado", 
        "success": "successfull", 
        "status": 200})    
    })
};

const createProduct = (req, res) =>{
    let product = new ProductSchema({
        upc: req.body.upc,
        prod_name : req.body.prod_name,
        mfrg: req.body.mfrg,
        model: req.body.model,
        unit_list_price: req.body.unit_list_price,
        unit_in_stock: req.body.unit_in_stock
    })

    product.save((err, data) => {
        err && res.status(500).json({"menssage":err, 
        "status": 500,"success": "Failed"});

        res.status(200).json({"data": data, 
        "menssage": "Producto Creado", "success": "successfull"})
    })
};

const updateProduct = (req, res) => {
    const {id} = req.params;
    let {upc, prod_name, mfrg, model, unit_in_stock, unit_list_price} = req.body;

    ProductSchema.updateOne({_id:id},
        {$set: {upc, prod_name, mfrg, model, unit_in_stock, unit_list_price}}, (err, data) => {
            err && res.status(500).json({"menssage":err, 
            "status": 500,"success": "Failed"});
    
            res.status(200).json({"data": data, 
            "menssage": "Producto Editado", "success": "successfull"})
        });
}

module.exports = {findAllProduct, createProduct, updateProduct};