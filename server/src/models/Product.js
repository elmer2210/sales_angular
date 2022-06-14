const mongose = require('mongoose');
const Schema  = mongose.Schema;

const ProductSchema = new Schema ({
    upc: {
        type:String,
        required:true, 
    }, 
    prod_name: {
        type:String,
        required:true, 
    }, 
    mfrg: {
        type:String,
        required:true, 
    }, 
    model: {
        type:String,
        required:true, 
    }, 
    unit_list_price: {
        type:Number,
        required:true, 
    }, 
    unit_in_stock:{
        type:Number,
        required:true, 
    }
});

module.exports = Product = mongose.model('Product', ProductSchema);