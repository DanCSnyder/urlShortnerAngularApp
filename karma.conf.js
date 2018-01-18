// Karma configuration

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "./",

    // testing frameworks to use
    frameworks: ["mocha", "chai", "sinon"],

    files: [
      "client/lib/angular/angular.js",
      "client/lib/angular-route/angular-route.js",
      "client/lib/angular-mocks/angular-mocks.js",

      "client/app/**/*.js",

      "specs/client/authControllerSpec.js",
      "specs/client/servicesSpec.js",
      "specs/client/linksControllerSpec.js",
      "specs/client/shortenControllerSpec.js",
      "specs/client/routingSpec.js"
    ],

    reporters: ["progress", "cardboard"],

    browsers: ["PhantomJS"],

    autoWatch: false,

    singleRun: true
  });
};
