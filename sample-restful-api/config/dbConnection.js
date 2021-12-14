'use strict';

var mysql = require('mysql');
var conn = mysql.createConnection({
    host : 'localhost',
    user : '[my sql server user name]',
    password : '[mysql server user password]',
    database : '[your db name]'
});

conn.connect(function(msg){
    if(msg){
        throw msg;
    }
});

module.exports = conn;