var linksController = require("../links/linkController.js");
var userController = require("../users/userController.js");
var helpers = require("./helpers.js");

module.exports = function(app, express) {
  app.get("/:code", linksController.navToLink);

  app.post("/api/users/signin", userController.signin);
  app.post("/api/users/signup", userController.signup);
  app.get("/api/users/signedin", userController.checkAuth);

  // authentication middleware used to decode token and made available on the request
  app.get("/api/links/", linksController.allLinks);
  app.post("/api/links/", linksController.newLink);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
