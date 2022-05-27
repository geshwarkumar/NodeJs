'use strict';
var objApp = require('../model/appModel.js');

exports.funFetchAll = function(request, response){
    objApp.getAllUsers(function(err, result){
        // console.log('Controller:- ');
        if(err){
            response.status(500).send(err);
        }
        // console.log('Result:- ',result);
        response.status(200).send(result.recordset);
    });
};

exports.funCreate = function(request, response){
    objApp.createNew(request.body, function(err, result){
        // console.log('Controller:- ');
        if(err){
            response.status(500).send(err);
        }
        // console.log('Result:- ',result);
        if(result.rowsAffected > 0){
            response.status(200).send("Added Successfully!");
        }else{
            response.status(415).send("Something went wrong, try again later!");
        }
        
    });
};