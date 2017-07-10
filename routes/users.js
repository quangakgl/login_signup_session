/**
 * Created by quang on 04/07/2017.
 */
const bcrypt = require('bcryptjs');
const { db,config } = require('../pgp');
module.exports = function (app, express) {
    // handle sign up request
    app.post('/signup', (req, res) => {
       //console.log(req.body); //username: 'quangakgl4',password: '121212',phonenumber: 'ewr343234245'
        db.any("SELECT * FROM users WHERE username = $1", [req.body.username])
            .then(data => {
                if (data.length === 0) {
                    // this username does not yet exist
                    // hasing password by auto-generating a salt and hash
                    bcrypt.hash(req.body.password, 5, function (err, hash) {
                        db.none("INSERT INTO users (username, password,phonenumber) VALUES($1, $2,$3)", [req.body.username, hash,req.body.phonenumber])
                            .then(data=> {
                                // req.session.username = true;
                                // req.session.user = data;
                                // console.log(data)
                                req.flash('success','Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ!')
                                res.redirect('/')
                                //res.render('index', { status: 'Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ!' });
                            })
                            .catch(error => {
                                console.log(error.message);
                            });
                    });

                } else {
                    // this username already exists
                    req.flash('error','Tài khoản đã tồn tại. Vui lòng đăng nhập hoặc đăng ký một tài khoản khác!')
                    res.redirect('/')
                    //res.render('index', { status: 'Tài khoản đã tồn tại. Vui lòng đăng nhập hoặc đăng ký một tài khoản khác!' })
                }
            })
            .catch(error => {
                console.log(error.message);
            });
    });
    // handle sign in request
    app.post('/signin', (req, res) => {
        //console.log(req.body); // username: 'quangakgl1', password: '121212'
        db.oneOrNone("SELECT * FROM users WHERE username = $1", [req.body.username, req.body.password])
            .then(data => {
                if (data === null) {
                    // this account does not match
                    //console.log('Log in unsuccessfully. Account does not exist!!!');
                    //res.render('index', { status: 'Đăng nhập không thành công. Tài khoản không tồn tại!!!' });
                    req.flash('error','Đăng nhập không thành công. Tài khoản không tồn tại!!!')
                    res.redirect('/');
                } else {
                    //console.log(data);
                    // this account matches
                    bcrypt.compare(req.body.password, data.password, function (err, hashRes) {
                        if (hashRes) {
                            //console.log(req.session);
                            req.session['username'] = req.body.username;
                            //console.log(req.session['username'])
                            req.flash('success','Bạn đăng nhập thành công!')
                            //res.render('index',{ status: 'Bạn đăng nhập thành công!', username: req.body.username, password: data.password });
                            res.redirect('/');
                        } else {
                            //console.log('Log in unsuccessfully. Account does not match!!!');
                            req.flash('error', 'Đăng nhập không thành công. Tài khoản không khớp !!!');
                            //res.render('index', { status: 'Đăng nhập không thành công. Tài khoản không khớp !!!' });
                            res.redirect('/')
                        }
                    })
                }
            })
            .catch(error => {
                console.log(error.message);
            });
    });
    app.get('/logout', (req, res) => {
        req.session['username'] = false;
        delete req.session['username'];
        req.flash('success','Đã đăng xuất')
        res.redirect('/')
        //console.log('Log out');
        //console.log(req.session);
        //req.flash('error', 'User is logged out');
        //res.render('index', { username: req.session['username'] });
    });
}