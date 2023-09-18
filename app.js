<<<<<<< HEAD
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')
/*app.use((req,res,next)=>{ // this is a middleware
    console.log('its me MARIO')
    next(); // next is a function that allows the request to continue to the next middleware
});*/

app.use(bodyParser.urlencoded({extended: false})); // body parsing and then automatically next() (body parsing ?) 

/*app.use('/', (req, res , next)=>{ // this middleware always runs because we added next() so each time we starting the server it starts with this middleware than go to the next ones
    console.log('This always run');
    next();
})*/

app.use ('/admin',adminRouter); // we added this here cuz we did cut it from the url on the router.get in admin (VV)
app.use (shopRouter);

app.use((req, res , next)  =>{
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
=======
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
>>>>>>> 7e96b3e (dynamic)
