/**
 * Created by quang on 03/07/2017.
 */

const { db, } = require('../pgp');
exports.index = (req,res) =>{
        // if(req.session['user']) {
        // console.log(req.session.user)
    // }
    db.any('SELECT * FROM information')
        .then( data =>{
            //console.log(data);
            res.render('index',{
                carts : data,
                username: req.session['username'],

            })
        } )
}
exports.productdetail = (req, res) => {
    let id = req.params.id;
        db.any('SELECT * FROM information WHERE id = ' + id)
            .then(data => {
                //console.log(data);
                res.render('product-detail', {
                    carts: data,
                    username: req.session['username'],
                })
            })
}
exports.giohang1 = (req,res) =>{
    db.any('SELECT * FROM information')
        .then( data =>{
            //console.log(data);

            res.render('giohang',{
                carts : data,
                username: req.session['username'],
            })
        } )
}
exports.thanhtoan = (req,res) =>{
    db.any('SELECT * FROM information')
        .then( data =>{
            //console.log(data);

            res.render('thanhtoan',{
                carts : data,
                username: req.session['username'],
            })
        } )
}

