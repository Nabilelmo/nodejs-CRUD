const path = require('path');
<<<<<<< HEAD
const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{ // same as .use but will fire only when getting get requests . i didnt understand this well 
    res.sendFile(path.join(__dirname, 'views', 'shop.html')) // we are sending the html file here , if we wrote the url like a basic (./x/x) it will not work so we add a core module in node called path and the rest u can look for it 
});

module.exports = router;
=======

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
>>>>>>> 7e96b3e (dynamic)
