'use strict';    

const express = require('express');
const util = require('util');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const express_app = express();

express_app.get('/', function(req, res) {
    console.log('"/" should not be accessed');
    // res.status(200).send('"/" should not be accessed, please check your program :)');
}); 

express_app.get('/heartbeat', function(req, res) {
    res.status(200).send('OK');
});

express_app.get('/err', function (req, res) { 
    throw new Error('/err throws error');
});

express_app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`); 

console.log('END OF server.js; ' + (new Date()));
