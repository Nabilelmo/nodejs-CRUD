const path = require('path');

const express = require('express');

const ProductsControllers = require('../controllers/products');
const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', ProductsControllers.getAddProduct); // adding () 9awssayn will execute this , we don't wanna execute it we just wanna tell express when u are here u go check this function in the controller file

// /admin/add-product => POST
router.post('/add-product', ProductsControllers.postAddProducts);

module.exports = router;

