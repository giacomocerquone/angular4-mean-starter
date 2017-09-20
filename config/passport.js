const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../models/Admin');

/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  Admin.findOne({ email: email.toLowerCase() }, (err, admin) => {
    if (err) { return done(err); }
    if (!admin) {
      return done(null, false, {
        message: 'User not found'
      });
    }
    admin.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (isMatch) {
        return done(null, admin);
      }
      return done(null, false, { message: 'Invalid email or password.' });
    });
  });
}));
