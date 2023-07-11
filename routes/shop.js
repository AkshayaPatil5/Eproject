const express = require('express');
const router = express.Router();


//route = /shop/book
router.get('/book',(req,res,next)=>{
    
    res.send('<h1>Hello from Express</h1>')
})

module.exports = router