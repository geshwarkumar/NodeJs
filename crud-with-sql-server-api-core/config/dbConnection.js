'use strict';

var sql = require("mssql");
var dbConfig = {
    user: "sa", // SQL Server Login
    password: "nicsi", // SQL Server Password
    server: "10.132.49.180", // SQL Server Server name
    // port: 1433,
    database: "CRUDSqlNodeDB", // SQL Server Database name,
    options: {
        trustedconnection:  true,
        enableArithAbort:  true,
        encrypt: false,
        //instancename:  'SQLEXPRESS'  // SQL Server instance name
    },
};

sql.connect(dbConfig).then(result => {
    // return result;
}).catch(err => {
    throw err;
});

module.exports = sql;