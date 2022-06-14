const express = require('express');
const mongodb = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();
const customerRoutes = require("./routes/customer");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");

const app = express();
const port = process.env.PORT || 8001;
const url = process.env.MONGODB_URL;

//mongodb conection
mongodb.connect(url)
.then(()=>console.log('CONECTED TO MONGODB DATA BASE!!!'))
.catch((err)=>console.error(err))

//routes
app.get('/', (req, res)=> {
    res.send('welcome to my api')
})

//Middleware
//app.use(express.json);
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);



app.listen(port, () => console.log('server is listenig on port', port));
