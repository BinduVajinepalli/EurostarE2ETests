const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const home = client.page.homepage();
const resultsPage = client.page.searchResultPage();
const travelExtrasPage = client.page.travelExtrasPage();
const checkOutPage = client.page.checkoutPage();

defineSupportCode(({ Given, Then, When }) => {

  Given(/^I am on Eurostar website$/,() => {
      return home
        .navigate()
        .waitForElementVisible('@body', 1000)
        .assert.elementPresent('@eurostarLogo')
  });

  When(/^I search for train with journey type "(.*?)"$/, (journeyType) => {
      return home
            .selectJourneyType(journeyType);
  });

  When(/^I search for a train from "(.*?)" to "(.*?)"$/, (fromCity, toCity) => {
      return home
            .enterOriginCityName(fromCity)
            .enterDestinationCityName(toCity);
  });

  When(/^I choose start date as "(.*?)"$/, (startDate) => {
      return home
            .selectStartDate(startDate)
            .performSearch();
  });

  When(/^I search from "(.*?)" to "(.*?)"$/, (startDate, endDate) => {
      return home
            .selectStartDate(startDate)
            .selectEndDate(endDate)
            .performSearch();
  });

  When(/^I add an outbound train to basket$/, () => {
    return resultsPage
            .selectOutboundTrain();
  });

  When(/^I add an inbound train to basket$/, () => {
    return resultsPage
            .selectInboundTrain();
  });

  When(/^I skip the travel extras$/, () => {
      return resultsPage
            .goToTravelExtrasPage();
  });

  When(/^I proceed to checkout page$/, () => {
      return travelExtrasPage
            .goToPassengerDetailsPage()
            .waitForElementVisible('@paxDetailsPageHeader', 10000)
            .goToCheckoutPage();
  });

  When(/^I add a cheapest outbound price$/, () => {
      return resultsPage
          .selectCheapestOutboundTrain();
  });

  When(/^I add a cheapest inbound price$/, () => {
      return resultsPage
          .selectCheapestInboundTrain();
  });

  When(/^I fill in the passenger details$/, () => {
      return checkOutPage
            .enterFirstName("Bindu")
            .enterLastName("Hima")
            .enterEmail("bindut@test.com")
            .enterPhone("12345668")
  });

  Then(/^I should be seeing the trains in the search page$/, () => {
      return resultsPage
            .waitForElementVisible('@searchResults', 5000)
            .assert.containsText('@searchResultsPageHeading', "London to Paris")
            .assert.elementPresent('@searchResults');
  });

  Then(/^I should see the selected trains in the basket$/, () => {
    return checkOutPage
            .assert.containsText('@outboundJourney', "London St Pancras Int'l to Paris Gare du Nord")
            .assert.containsText('@inboundJourney', "Paris Gare du Nord to London St Pancras Int'l")
  });

  Then(/^I should be displayed with an error$/, () => {
    return home
          .assert.elementPresent('@feedbackErrorMessage')
  });

});
