var Q = require("q");
var jwt = require("jwt-simple");
var User = require("./userModel.js");

var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

module.exports = {
  signin: function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    findUser({ username: username })
      .then(function(user) {
        if (!user) {
          next(new Error("User does not exist"));
        } else {
          return user.comparePasswords(password).then(function(foundUser) {
            if (foundUser) {
              var token = jwt.encode(user, "secret");
              res.json({ token: token });
            } else {
              return next(new Error("No user"));
            }
          });
        }
      })
      .fail(function(error) {
        next(error);
      });
  },

  signup: function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    // check to see if user already exists
    findUser({ username: username })
      .then(function(user) {
        if (user) {
          next(new Error("User already exist!"));
        } else {
          // make a new user if not one
          return createUser({
            username: username,
            password: password
          });
        }
      })
      .then(function(user) {
        // create token to send back for auth
        var token = jwt.encode(user, "secret");
        res.json({ token: token });
      })
      .fail(function(error) {
        next(error);
      });
  },

  checkAuth: function(req, res, next) {
    // grab the token in the header is any
    // then decode the token, which we end up being the user object
    // check to see if that user exists in the database
    var token = req.headers["x-access-token"];
    if (!token) {
      next(new Error("No token"));
    } else {
      var user = jwt.decode(token, "secret");
      findUser({ username: user.username })
        .then(function(foundUser) {
          if (foundUser) {
            res.send(200);
          } else {
            res.send(401);
          }
        })
        .fail(function(error) {
          next(error);
        });
    }
  }
};
