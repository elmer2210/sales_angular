const mongose = require('mongoose');
const Order = require('./Order');
const Schema  = mongose.Schema;

const OrderLineSchema = new Schema({
    quantity: {
        type: Number, 
        required: true,
    }, 
    unit_sale_price: {
        type:Number,
        required: true,
    },
    subtotal:{
        type:Number,
        required: true,
    },
    id_product:{
        type:Schema.Types.ObjectId,
        ref: Product
    },
    id_order:{
        type:Schema.Types.ObjectId,
        ref: Order
    }

})