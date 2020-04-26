const passport = require('passport');
const VKStrategy = require('passport-vkontakte').Strategy;
const User = require('../models/Users');
const config = require('../config').ids;
const init = require('./init');
const user = {current: null, new: null};

passport.use(new VKStrategy({
  clientID: config.vk.clientID,
  clientSecret: config.vk.clientSecret,
  callbackURL: config.vk.callbackURL},
function(accessToken, refreshToken, params, profile, done) {
  User.findOne({vkID: profile.id}, function(err, result) {
    if (err) return done(err);
    if (!result) {
      user.new = profile;
      return done(null, user);
    } else {
      user.current = result;
      return done(null, user);
    }
  });
}));

init();

module.exports = passport;
