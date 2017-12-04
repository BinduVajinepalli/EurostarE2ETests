var nextCommands = {
  selectOutboundTrain: function() {
    return this.waitForElementVisible('@outboundFirstTrain', 5000)
              .click('@outboundFirstTrain')
              .waitForElementVisible('@continueToTravelExtrasButton', 5000)
              .api.saveScreenshot("reports/2.png")
  },

  selectInboundTrain: function() {
    return this.waitForElementVisible('@inboundFirstTrain', 10000)
              .click('@inboundFirstTrain')
              .waitForElementVisible('@outboundFirstTrain', 5000)
              .api.saveScreenshot("reports/3.png")
  },

  selectCheapestInboundTrain: function () {
    return this.waitForElementPresent('@inboundFirstTrain', 10000)
              .click('@lowestFareInboundTrain')
              .waitForElementPresent('@continueToTravelExtrasButton', 10000)
              .api.saveScreenshot("reports/5.png")
  },

  selectCheapestOutboundTrain: function () {
      return this.waitForElementPresent('@outboundFirstTrain', 10000)
              .click('@lowestFareOutboundTrain')
              .waitForElementPresent('@continueToTravelExtrasButton', 10000)
              .api.saveScreenshot("reports/4.png")
  },

  goToTravelExtrasPage: function() {
    return this.waitForElementPresent('@continueToTravelExtrasButton', 10000)
              .getLocationInView('@continueToTravelExtrasButton')
              .assert.visible('@continueToTravelExtrasButton')
              .click('@continueToTravelExtrasButton')
              .waitForElementPresent('@travelExtrasPageLogo', 5000)
  }

};

module.exports = {
  commands: [nextCommands],
  elements: {
    body: 'body',
    searchResults: {
      selector: 'ul.train-list li'
    },
    eurostarLogo: {
      selector: 'img.c-navigation__logo-image--desktop'
    },
    searchResultsPageHeading: {
      selector: 'h2.train-table-head__journey-info-od'
    },
    outboundFirstTrain: {
      selector:'ul.train-list li:nth-child(2) section.classOfAccommodation:nth-child(2) class-of-accommodation[direction="outbound"] input'
    },
    inboundFirstTrain: {
      selector:'ul.train-list li:nth-child(2) section.classOfAccommodation:nth-child(2) class-of-accommodation[direction="inbound"] input'
    },
    continueToTravelExtrasButton: {
      selector: 'div.basket-actions-container button'
    },
    travelExtrasPageLogo: {
      selector: 'h2.travel-extras__title'
    },
    lowestFareOutboundTrain: {
      selector: 'ul.train-list train[journey-direction="outbound"] section.classOfAccommodation span.coa__lowest-fare span'
    },
    lowestFareInboundTrain: {
      selector: 'ul.train-list train[journey-direction="inbound"] section.classOfAccommodation span.coa__lowest-fare span'
    }
  }
};
