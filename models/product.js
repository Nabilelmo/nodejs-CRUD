const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename), //p is defined in the whole file now 
    'data', 
    'products.json'
    );

const getProductFromFile = (cb) => {
        fs.readFile(p,(err,fileContent)=>{
            if(err){
              return  cb([]);
            }else{
                 cb(JSON.parse(fileContent))
            }
          
    });
}

module.exports = class Product {
    constructor(t){
        this.title = t ; //(this) ----------->objects in javascript
    }

    save(){
        getProductFromFile(products=>{           
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),err =>{
                console.log(err)
            })
        })
    }

    static fetchAll(cb) {
        getProductFromFile(cb);
}
};