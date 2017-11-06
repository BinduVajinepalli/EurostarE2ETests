var nextCommands = {
    selectJourneyType: function(journeyType) {

      if(journeyType == "One way"){
        var res =  this.waitForElementVisible('@oneWay', 1000)
                        .click('@oneWay');
      }else if(journeyType == "Return"){
        res = this.waitForElementVisible('@return', 1000)
                  .click('@return');
      }
        return res;
    },

    enterOriginCityName: function(originCityName) {
        return this.click('@originCity')
                  .setValue('@originCity', originCityName)
                  .waitForElementPresent('@londonCity', 200)
                  .click("@londonCity");
    },

    enterDestinationCityName: function(destinationCityName){
        return this.click('@destinationCity')
                .setValue('@destinationCity', destinationCityName)
                .waitForElementPresent('@parisCity', 200)
                .click("@parisCity");
    },

    selectStartDate: function(startDate) {
      return this.setValue('@fromDate', startDate);
    },

    selectEndDate: function(endDate) {
      return this.waitForElementPresent('@toDate', 2000)
                .clearValue('@toDate')
                .setValue('@toDate', endDate);
    },

    performSearch: function() {
        return this.waitForElementPresent('@searchButton', 2000)
                  .click('@searchButton');
    }
};

module.exports = {
    url: 'https://www.eurostar.com',
    commands: [nextCommands],
    elements: {
        body: 'body',
        oneWay: {
            selector: "//label[@for='edit-one-way-faux--on']",
            locateStrategy: 'xpath'
        },
        return: {
            selector: "//label[@for='edit-one-way-faux--off']",
            locateStrategy: 'xpath'
        },
        originCity: {
          selector: 'input[id=\"edit-origin\"]'
        },
        destinationCity:{
          selector: 'input[id="edit-destination"]'
        },
        londonCity: {
          selector: ".autocomplete-suggestion[data-val='London St Pancras Int\\'l, United Kingdom']"
        },
        parisCity: {
          selector: ".autocomplete-suggestion[data-val='Paris Gare du Nord, France']"
        },
        fromDate: {
          selector: "input#edit-depart.c-datepicker__input"
        },
        toDate: {
          selector: "input#edit-return.c-datepicker__input"
        },
        searchButton: {
          selector: "div.c-booking-magnet__submit-wrap"
        },
        searchResults: {
          selector: 'ul.train-list li'
        },
        eurostarLogo: {
          selector: 'img.c-navigation__logo-image--desktop'
        },
        feedbackErrorMessage: {
          selector: 'div.c-datepicker__input-wrap.input__wrap.input__wrap--icon.input__wrap--error'
        }
    }
};
