'use strict';
var sql = require('../../config/dbConnection.js');

exports.getAllUsers = function(result){
    var query = 'SELECT * FROM basic_details ORDER BY id';
    sql.query(query, function(err, res){
        if(err){
            result(null, err);
        }else{
            result(null, res);
            //return result.status(202).send(res.recordsets);
        }
    });
};

exports.createNew = function(request, result){
    var query = `INSERT INTO basic_details VALUES('${request.name}', ${request.age}, '${request.gender}')`;
    sql.query(query, function(err, res){
        if(err){
            result(null, err);
        }else{
            result(null, res);
        }
    });
};