const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const localhost = 3000;
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(localhost, function(){
    console.log('Server running on localhost:' + localhost + '/')
});