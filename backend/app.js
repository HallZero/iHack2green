const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const localhost = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(localhost, function(){
    console.log('Server running on localhost:' + localhost + '/')
});