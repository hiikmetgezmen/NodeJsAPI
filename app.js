const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const productsRouter = require('./routes/products');
require("dotenv").config();



mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.bfm5y1m.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
(error)=>{
    if(error) 
    console.log("sdfgd");
    else console.log("cnnected");
});


app.use(express.json());
app.use(productsRouter);



app.listen(3000,()=>{
    console.log("Working");
});
