const mongose = require('mongoose');
const Schema  = mongose.Schema;

const CustomerSchema = new Schema({
    c_first_name: {
        type: String,
        required: true
    },
    c_last_name: {
        type:String,
        required:true
    }, 
    c_phone: {
        type: String,
        required: true
    },
    c_street: {
        type: String,
         required: true
    }, 
    c_zip_code: {
        type: String,
    },
    create_at: { type: Date, default: Date.now },

});

module.exports = Customer = mongose.model('Customer', CustomerSchema);