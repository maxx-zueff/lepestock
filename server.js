// Dependensies

const http = require('http');
const express = require('express');
const exphbs = require('express-handlebars');
const logger = require('morgan');
const config = require('./config').port;
const passport = require('passport');

// const bodyParser = require('body-parser');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
// const router = new express.Router();

const index = require('./routers/index');
const user = require('./routers/user');

// ------------------------------------------------------------------
// Server

const app = express();
const server = http.createServer(app);

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// ------------------------------------------------------------------
// Middleware function handles

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});

require('./models/Users');

app.use(express.json());
// app.use(bodyParser);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({mongooseConnection: db})}));

app.use(passport.initialize());
app.use(passport.session());

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

app.use(function(req, res, next) {
  if (req.session) {
    console.log(req.session);
    next();
  } else {
    console.log('no session in req');
    next();
  }
});

app.use(user);
app.use(index);

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.post('/login', (req, res) => {
  console.log(req.body);
  sess = req.session;
  sess.email = req.body.email;
  res.end('done');
});

// ------------------------------------------------------------------
// Error handler for paths

app.use(function notFound(req, res, next) {
  next({
    status: 404,
    code: 404});
});

// app.use(error_handler);

// ------------------------------------------------------------------
// Server listener

server.listen(config.port, function() {
  console.log( 'http://localhost:' + config.port +
    ' : server has been launched' );
});

