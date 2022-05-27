'use strict';
module.exports = function(app){
    var objApp = require('../controller/appController');
    app.route('/user/list').get(objApp.funFetchAll);
    app.route('/user/create').post(objApp.funCreate);
    // app.route('/employee/details/:empId').get(objEmp.funGetDetails);
};