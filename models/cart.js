const path = require('path');
const fs = require('fs'); 

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  );

module.exports = class Cart {
    static addProduct(id, productPrice) {
        //fetch the previous cart
        fs.readFile(p , (err, fileContent)=>{
            let cart  = {product : [], totalPrice: 0};
            if(!err){
                cart = JSON.parse(fileContent)
            }
            //analyze the cart => finding existing product
            const existingProductIndex = cart.product.findIndex(prod => prod.id === id);
            const existingProduct = cart.product[existingProductIndex];
            let updatedProduct;
                    //add new product / increase quantity
            if(existingProduct) {
                updatedProduct = {... existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [... cart.product];
                cart.products[existingProductIndex]= updatedProduct;
            }else{
                updatedProduct = { id: id, qty :1}
                cart.product = [... cart.product , updatedProduct]
            }
            cart.totalPrice = cart.totalPrice + productPrice;
        }
        )
    }
}
