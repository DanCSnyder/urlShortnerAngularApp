"use strict";

describe("Services", function() {
  beforeEach(module("shortly.services"));

  afterEach(
    inject(function($httpBackend) {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    })
  );

  describe("Links Factory", function() {
    var $httpBackend, Links;

    beforeEach(
      inject(function(_$httpBackend_, _Links_) {
        $httpBackend = _$httpBackend_;
        Links = _Links_;
      })
    );

    it("should exist", function() {
      expect(Links).to.exist;
    });

    it("should have a method `getAll`", function() {
      expect(Links.getAll).to.be.a("function");
    });

    it("should have a method `addOne`", function() {
      expect(Links.addOne).to.be.a("function");
    });

    it("should get all links with `getAll`", function() {
      var mockResponse = [
        {
          title: "Twitter",
          url: "https://twitter.com"
        },
        {
          title: "Reddit",
          url: "https://reddit.com/r/javascript"
        }
      ];

      $httpBackend.expect("GET", "/api/links").respond(mockResponse);

      Links.getAll().then(function(links) {
        expect(links).to.deep.equal(mockResponse);
      });

      $httpBackend.flush();
    });
  });
});
