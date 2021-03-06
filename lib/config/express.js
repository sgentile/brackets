// Generated by CoffeeScript 1.7.1
(function() {
  "use strict";
  var MongoStore, config, express, passport, path;

  express = require("express");

  path = require("path");

  config = require("./config");

  passport = require("passport");

  MongoStore = require("connect-mongo")(express);


  /*
  Express configuration
   */

  module.exports = function(app) {
    app.configure("development", function() {
      var noCache;
      app.use(require("connect-livereload")());
      app.use(noCache = function(req, res, next) {
        if (req.url.indexOf("/scripts/") === 0) {
          res.header("Cache-Control", "no-cache, no-store, must-revalidate");
          res.header("Pragma", "no-cache");
          res.header("Expires", 0);
        }
        next();
      });
      app.use(express["static"](path.join(config.root, ".tmp")));
      app.use(express["static"](path.join(config.root, "app")));
      app.set("views", config.root + "/app/views");
    });
    app.configure("production", function() {
      app.use(express.favicon(path.join(config.root, "public", "favicon.ico")));
      app.use(express["static"](path.join(config.root, "public")));
      app.set("views", config.root + "/views");
    });
    app.configure(function() {
      app.engine("html", require("ejs").renderFile);
      app.set("view engine", "html");
      app.use(express.logger("dev"));
      app.use(express.json());
      app.use(express.urlencoded());
      app.use(express.methodOverride());
      app.use(express.cookieParser());
      app.use(express.session({
        secret: "angular-brackets secret",
        store: new MongoStore({
          url: config.mongo.uri,
          collection: "sessions"
        }, function() {
          console.log("db connection open");
        })
      }));
      app.use(passport.initialize());
      app.use(passport.session());
      app.use(app.router);
    });
    app.configure("development", function() {
      app.use(express.errorHandler());
    });
  };

}).call(this);

//# sourceMappingURL=express.map
