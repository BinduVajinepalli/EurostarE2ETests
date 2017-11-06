var nextCommands = {
  goToPassengerDetailsPage: function() {
     return this.waitForElementVisible('@continueWithoutTravelExtrasButton', 5000)
              .click('@continueWithoutTravelExtrasButton')
  },
  goToCheckoutPage: function() {
    return this
              .waitForElementVisible('@continueAsGuestButton', 5000)
              .click('@continueAsGuestButton')
  }
};

module.exports = {
  commands: [nextCommands],
  elements: {
    body: 'body',
    travelExtrasPageHeader: {
      selector: 'h2.travel-extras__title'
    },
    continueWithoutTravelExtrasButton: {
      selector: 'button.component.c-action.c-action--primary.basket-actions__submit'
    },
    paxDetailsPageHeader: {
      selector: 'h2.login__title'
    },
    continueAsGuestButton: {
      selector: 'button.component.c-action.c-action--primary.login__button.login__button--continue-as-guest'
    }
  }
};
