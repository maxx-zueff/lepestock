// Dependensies

const http = require('http');
const express = require('express');
const logger = require('morgan');
const config = require('./config').port;
const passport = require('passport');
const cacheableResponse = require('cacheable-response');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'
const appNext = next({ dev });
const handle = appNext.getRequestHandler();

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
// const router = new express.Router();

const index = require('./routers/index');
const user = require('./routers/user');

// ------------------------------------------------------------------
// DataBase

// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('we\'re connected!');
// });

// ------------------------------------------------------------------
// Cache

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1hour
  get: async ({ req, res, pagePath, queryParams }) => {
    const data = await app.renderToHTML(req, res, pagePath, queryParams)

    // Add here custom logic for when you do not want to cache the page, for
    // example when the page returns a 404 status code:
    if (res.statusCode === 404) {
      res.end(data)
      return
    }

    return { data }
  },
  send: ({ data, res }) => res.send(data),
});


appNext.prepare().then(() => {

  const app = express();
  const server = http.createServer(app);

  app.use(express.json());

  // app.use(session({
  //   secret: 'keyboard cat',
  //   resave: false,
  //   saveUninitialized: true,
  //   store: new MongoStore({mongooseConnection: db})}));

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(logger('dev'));

  app.use(function(req, res, next) {
    if (req.session) {
      console.log(req.session);
      next();
    } else {
      console.log('no session in req');
      next();
    }
  });

  // app.use(user);
  // app.use(index);

  app.post('/login', (req, res) => {
    console.log(req.body);
    sess = req.session;
    sess.email = req.body.email;
    res.end('done');
  });

  app.get('*', (req, res) => handle(req, res));

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

});