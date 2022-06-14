const mongose = require('mongoose');
const OrderSchema = require("../models/Order");

const findAllOrder = (req, res) => {
    OrderSchema.find((err, data)=>{
        err && res.status(500).json({"menssage":err, 
        "status": 500,"success": "Failed"});

        res.status(200).json({"data": data, 
        "menssage": "Orden Encontrada", 
        "success": "successfull", 
        "status": 200})    
    })
};

const createOrder = (req, res) =>{
    let order = new OrderSchema({
        order_date: req.body.order_date,
        sold_by : req.body.sold_by,
        total: req.body.total,
        id_customer : req.body.id_customer ,
    })

    order.save((err, data) => {
        err && res.status(500).json({"menssage":err, 
        "status": 500,"success": "Failed"});

        res.status(200).json({"data": data, 
        "menssage": "Orden Creada", "success": "successfull"})
    })
}

const updateOrder = (req, res) => {
    const {id} = req.params;
    let {upc, prod_name, mfrg, model, unit_in_stock, unit_list_price} = req.body;

    OrderSchema.updateOne({_id:id},
        {$set: {order_date, sold_by, total}}, (err, data) => {
            err && res.status(500).json({"menssage":err, 
            "status": 500,"success": "Failed"});
    
            res.status(200).json({"data": data, 
            "menssage": "Orden Editada", "success": "successfull"})
        });
}

module.exports = {findAllOrder, createOrder, updateOrder};