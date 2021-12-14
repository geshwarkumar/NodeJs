'use strict';
var sql = require('../../config/dbConnection.js');

exports.getAllEmployee = function(result){
    var query = 'SELECT * FROM employee ORDER BY emp_id';
    sql.query(query, function(err, res){
        if(err){
            result(null, err);
        }else{
            result(null, res);
        }
    });
};