"use strict";

let chai = require("chai"),
  path = require("path"),
  TrackingHand = require(path.join(__dirname, "../src", "tracking_hand"));
var expect = chai.expect;

describe("Tracking Hand", () => {
  describe("#Start", () => {
    var trackingHand;
    beforeEach(() => {
      trackingHand = new TrackingHand();
    });

    it("return status", () => {
      expect(trackingHand.isStart).to.equal(false);
    });

    // it("can be changed", () => {
    //   trackingHand.start();
    //   expect(trackingHand.isStart).to.equal(true);
    // });
  });
});