'use strict';
module.exports = function(app){
    var objEmp = require('../controller/employeeController');

    app.route('/employee/list').get(objEmp.funFetchAll);
    // app.route('/employee/details/:empId').get(objEmp.funGetDetails);
};