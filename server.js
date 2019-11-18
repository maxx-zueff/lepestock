// Dependensies

const http         = require('http');
const express      = require('express');
const exphbs       = require('express-handlebars');
const logger       = require('morgan');
const config       = require('./config.json');

// ------------------------------------------------------------------
// Server

const app     = express();
const server  = http.createServer(app);


// ------------------------------------------------------------------
// Middleware function handles

function not_found (req, res, next) {
    next({
        status: 404,
        code: 404
    });
}

// function error_handler (err, req, res, next) {

//     if (config.errors[err.code]) {
//         if (err.body) err.body.message = config.errors[err.code];
//         else err.body = {message: config.errors[err.code]};
//     }

//     console.log(err);

//     res.status(err.status || 500);
//     res.json(err.body);
// }

// ------------------------------------------------------------------
// Template engine

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// ------------------------------------------------------------------
// Middleware for every path

app.use(logger('dev'));
app.use(express.static('./public'));

app.get('/', function (req, res, next) {
    res.render('home');
});

// ------------------------------------------------------------------
// Error handler for paths

app.use(not_found);
// app.use(error_handler);

// ------------------------------------------------------------------
// Server listener

server.listen(config.port, function() {
    console.log( 'http://localhost:' + config.port
        + ' : server has been launched' );
});
