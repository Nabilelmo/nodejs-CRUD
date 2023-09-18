const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{ // same as .use but will fire only when getting get requests . i didnt understand this well 
    res.sendFile(path.join(__dirname, 'views', 'shop.html')) // we are sending the html file here , if we wrote the url like a basic (./x/x) it will not work so we add a core module in node called path and the rest u can look for it 
});

module.exports = router;