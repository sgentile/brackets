'use strict'

mongoose = require('mongoose')
User = mongoose.model('User')
passport = require('passport')
LocalStrategy = require('passport-local').Strategy

# * Passport configuration

passport.serializeUser (user, done) ->
  done null, user.id
  return

passport.deserializeUser (id, done) ->
  User.findOne
    _id:id
  , "-salt -hashedPassword", (err, user) ->
      done err, user
      return

  return

# add other strategies for more authentication flexibility
passport.use new LocalStrategy(
  usernameField: 'email'
  passwordField: 'password'
, (email, password, done) ->
  User.findOne
    email:email
  , (err, user) ->
      return done(err) if err
      unless user #if(!user)
        return done(null, false,
          message: 'This email is not registered'
        )
      unless user.authenticate(password)
        return done(null, false,
          message: 'This password is not correct'
        )
      done null, user

  return
)

module.exports = passport