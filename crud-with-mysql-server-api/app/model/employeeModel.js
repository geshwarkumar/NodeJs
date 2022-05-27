'use strict';
const bcrypt = require('bcryptjs');
var CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
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

exports.login = function(req, result){
    console.log(req.body);
    var login_query = "SELECT login_id AS LoginID, password AS Password, mobile_no AS MobileNo, emp_code AS EmpCode, hc_id AS HCID, '0' AS DistrictID, 'HRPMS' AS PostingPlace, password_flag AS PasswordFlag, role_code AS RoleCode, 'Admin' AS LoginUser FROM master_login WHERE role_code = 'AD' AND active_status = 'Y'";
    // sql.query(query, function(err, res){
    //     if(err){
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // });

    sql.query(
        login_query
        , function (err, res_login) {
            console.log(req.body.password);
            if (typeof res_login[0] != 'undefined') {
                var passwordData = CryptoJS.AES.decrypt(req.body.password, 'hrpms_key');
                console.log('passwordData', passwordData);
                var password = passwordData.toString(CryptoJS.enc.Utf8);
                console.log('password', password);
                console.log('compare:- ',bcrypt.compare(password, res_login[0].Password));
                bcrypt.compare(password, res_login[0].Password, function (err, result1) {
                if (err) {
                    // return res_login.json({
                    //     success: false
                    // });
                    // res_login.json({
                    //     success: false
                    // });
                    result(null, err);
                }
                if (result1) {
                    const JWTToken = jwt.sign({
                        login_id: res_login[0].LoginID,
                        mobile: res_login[0].MobileNo,
                        emp_code: res_login[0].EmpCode,
                        hc_id: res_login[0].HCID,
                        district_id: res_login[0].DistrictID,
                        posting_place: res_login[0].PostingPlace,
                        password_flag: res_login[0].PasswordFlag,
                        role_code: res_login[0].RoleCode,
                        login_user: res_login[0].LoginUser,
                        app_name: "hrpms"
                    }, 'HRPMS%&986');
                    // return res_login.status(200).json({ token: JWTToken, success: true });
                    result(null, res_login.status(200).json({ token: JWTToken, success: true }));
                } else {
                    // return res_login.json({
                    //     success: false
                    // });
                    // res_login.json({
                    //     success: false
                    // });
                    result(null, {success: false, data: result1});
                }
            });
        } else {
            // return res_login.json({
            // success: false
            // });
            // res_login.json({
            //     success: false
            // });
            result(null, {success: false});
        }
    });
};