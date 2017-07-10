/**
 * Created by quang on 03/07/2017.
 */

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const nunjucks = require('nunjucks');
const parseurl = require('parseurl');
const session = require('express-session');
const cookieSession = require('cookie-session');
const shortid = require('shortid');
const cookieParser = require('cookie-parser');
const { db, } = require('./pgp');
const flash = require('express-flash');
//const csrf = require('csurf')
const routes = require('./routes/routes');

//const csrfProtection = csrf({ cookie: true })


app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
//app.use(csrfProtection)
app.use(session({
    secret: 'carts',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    },
    resave: false,
    saveUninitialized: true
}))
app.use(flash());
nunjucks.configure('views', {
    autoescape: true,
    cache: false,
    express: app,
    watch: true
});
app.engine('html', nunjucks.render);

app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname,'views'))
app.engine('html', nunjucks.render);

require('./routes/users')(app, express);
app.get('/', routes.index);
app.get('/product-detail/:id?', routes.productdetail);
app.get('/giohang2', routes.giohang1);
app.get('/thanhtoan', routes.thanhtoan);
// app.get('/signin',(req,res) =>{
//     res.render('users/signin')
// })
// app.get('/signup',(req,res) =>{
//     res.render('users/signup')//{csrfToken: req.csrfToken()}
// })


app.listen(process.env.PORT || 2222,() => {
    console.log('listen port 2222')
});
