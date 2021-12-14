const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
port = process.env.port || 3000;

app.listen(port);
console.log('API server started on:: '+port);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require('./app/routes/employeeRoutes.js');
routes(app);