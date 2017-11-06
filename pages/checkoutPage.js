var nextCommands = {
    enterFirstName: function(firstname) {
      return this.waitForElementPresent('@body', 5000)
                .setValue('@firstName', firstname)
    },
    enterLastName: function(lastname) {
      return this.setValue('@lastname', lastname)
    },
    enterEmail: function(email) {
      return this.setValue('@email', email)
    },
    enterPhone: function(phone) {
      return this.setValue('@phone', phone)
    }
};

module.exports = {
  commands: [nextCommands],
      elements: {
        body: 'body',
        firstName: {
        selector: 'input[data-type="firstName"]'
      },
      lastname: {
        selector: 'input[data-type="lastName"]'
      },
      outboundJourney: {
        selector: 'ticket[data-direction="Outbound"] dd.ticket__path'
      },
      inboundJourney: {
        selector: 'ticket[data-direction="Inbound"] dd.ticket__path'
      },
      email: {
        selector: "input[name='email']"
      },
      phone: {
        selector: "input[name='phone']"
      }
  }
};
