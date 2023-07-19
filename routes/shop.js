const path = require('path');

const express = require('express');

const ProductsControllers = require('../controllers/products');

const router = express.Router();

router.get('/', ProductsControllers.getProdcts);// no () because we dont want to execute


module.exports = router;
