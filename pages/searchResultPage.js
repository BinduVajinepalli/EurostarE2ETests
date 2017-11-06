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
    }
  }
};
