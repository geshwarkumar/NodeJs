'use strict';
var objEmployee = require('../model/employeeModel.js');

exports.funFetchAll = function(request, response){
    objEmployee.getAllEmployee(function(err, result){
        // console.log('Controller:- ');
        if(err){
            response.send(err);
        }
        // console.log('Result:- ',result);
        response.send(result);
    });
};

exports.login = function(request, response){
    objEmployee.login(request, function(err, result){
        // console.log('Controller:- ');
        if(err){
            response.send(err);
        }
        // console.log('Result:- ',result);
        response.send(result);
    });
};