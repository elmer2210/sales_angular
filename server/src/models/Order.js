const mongose = require('mongoose');
const Schema  = mongose.Schema;

const OrderSchema = new Schema({
    order_date: {
        type: Date,
    }, 
    sold_by:{
        type:String,
        required: true
    },
    total:{
        type: Number,
        required: true
    },
    id_customer :{
        type:Schema.Types.ObjectId,
        ref: Customer
    }
});

module.exports = Order = mongose.model('Order', OrderSchema);