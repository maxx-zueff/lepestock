const express = require('express');
const router = new express.Router();
// const mongoose = require('mongoose');
const Users = require('../models/Users');
const Codes = require('../models/Codes');
const passportVK = require('../auth/vk');


router.use((req, res, next) => {
  if (req.session.user) next();
  else {
    const guest = new Users();
    guest.save(function(err, user) {
      if (err) next(err);
      else {
        req.session.user = user.id;
        next();
      }
    });
  }
});

router.post('/confirm_phone', (req, res, next) => {
  if (!req.body.phone) return next({err: 'Phone Required'});
  const code = Math.random().toString().substring(2, 6);
  const token = new Codes({'phone': req.body.phone});
  token.setCode(code);
  token.save(function(err, token) {
    if (err) next(err);
    // отправка кода в смс-аеро
    else res.send(code);
  });
});

router.post('/confirm_code', (req, res, next) => {
  Codes.findOne({'phone': req.body.phone})
      .then((token) => {
        if (!token || !token.validateCode(req.body.code)) {
          return next({errors: 'code is invalid'});
        } else {
          Users.findOneAndUpdate({'_id': req.session.user},
              {$set: {phone: req.body.phone}}).then((user) => {
            if (!user) return next({errors: 'user is invalid'});
            else res.send('phone added!');
          });
        }
      });

  // req.body.code
});


router.get('/auth/vk', passportVK.authenticate('vkontakte'));

router.get('/auth/vk/callback', function(req, res, next) {
  passportVK.authenticate('vkontakte', function(err, user, info) {
    console.log(user.new);
    if (err) next(err);
    else if (user.new) {
      Users.findOneAndUpdate({'_id': req.session.user},
          {$set: {vkID: user.new.id}}, function(err, user) {
            console.log(user);
            if (!user) return next({errors: 'user is invalid'});
            else res.send('social added!');
          });
    } else if (user.current) res.json(user.current);
  })(req, res, next);
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
