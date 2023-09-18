const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next)=>{ // this is (VV)
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')// we dont add next here because we want to show for each page a specific (res)
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body); 
    res.redirect('/');
})

module.exports = router;