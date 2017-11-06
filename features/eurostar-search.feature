Feature: Search for a Train from London to Paris, select the trains and add to basket

  Scenario: Search for a train from London to Paris
    Given I am on Eurostar website
    When I search for train with journey type "One way"
    And I search for a train from "London" to "Paris"
    And I choose start date as "10/12/2017"
    Then I should be seeing the trains in the search page

  Scenario: Search for a train from London to Paris and add to basket
    Given I am on Eurostar website
    When I search for train with journey type "Return"
    When I search for a train from "London" to "Paris"
    And I search from "10/12/2017" to "14/12/2017"
    And I add an outbound train to basket
    And I add an inbound train to basket
    And I skip the travel extras
    And I proceed to checkout page
    And I fill in the passenger details
    Then I should see the selected trains in the basket

  Scenario: User should be displayed with an error when they try to search for a tour without return date
    Given I am on Eurostar website
    When I search for train with journey type "Return"
    When I search for a train from "London" to "Paris"
    And I choose start date as "10/12/2017"
    Then I should be displayed with an error
