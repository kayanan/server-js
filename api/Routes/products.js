  const express= require('express');
  const router =express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'hi this is a new product',
        product_name: req.params
    
    });
});


module.exports=router;