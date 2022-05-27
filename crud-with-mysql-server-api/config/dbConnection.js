'use strict';

var mysql = require('mysql');
var conn = mysql.createConnection({
    // host : 'localhost',
    // user : '[my sql server user name]',
    // password : '[mysql server user password]',
    // database : '[your db name]'
    host: '10.132.49.180',
    user: 'root',
    password: 'nicsi',
    database: 'test'
});

conn.connect(function(msg){
    if(msg){
        throw msg;
    }
});

module.exports = conn;