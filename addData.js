/**
 * Created by quang on 03/07/2017.
 */
const pgp = require('pg-promise')();
const  db = pgp('postgres://postgres:123@localhost:5432/carts');
let data = require('./information.json');

for(let count in data){
    data[count].forEach((item) => {
        db.any('insert into information(id, tenhang, tinhchat, price, image) values ($(id), ${tenhang},${tinhchat},${price},${image})', item)
        .then(()=>{
        console.log('import succeed');
})
.catch(error => {
        console.log(error);
});
})
}