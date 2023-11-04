const express=require('express');
const app=express();
const productRout=require('./api/Routes/products.js');

const morgan= require('morgan');

app.use(morgan('dev'));

app.use((req,res,next)=>{
    // res.status(200).json({
    //     message:"hi server is running"
    // });
    console.log("1");
     next();
 
});
app.post('/hi',(req,res)=>{
    res.status(200).json({message:'hi da'});
});

app.get('/hi',(req,res)=>{

    res.status(200).json({message:'hi da get'});
});

app.use((req,res,next)=>{
    const error =new Error('notfound');
    error.ststus=404;
    next(error);


});app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.write('hi');
    res.end();
});




// app.use('/product',productRout);
// app.use('/order',require("./api/Routes/oders.js"));




module.exports=app;