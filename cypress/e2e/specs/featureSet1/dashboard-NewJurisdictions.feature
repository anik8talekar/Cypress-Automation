Feature: Dashboard - New Jurisdictions

    # Test Case ID: 1102531
    Scenario: User should be able to see New Jurisdictions widget
         Given I open the application
         When I click on existing engagement
         Then I make sure New Jurisdictions widget is visible

    # Test Case ID: 1102531
    Scenario: User should be able to turn the New Jurisdictions toggle on & off
         Given I open the application
         When I click on existing engagement
         Then I make sure New Jurisdictions widget is visible
         And I turn New Jurisdictions toggle off
         Then I turn New Jurisdictions toggle on

    # Test Case ID: 1102539
    Scenario: User should be able to select Tax Year from the drop down
         Given I open the application
         When I click on existing engagement
         Then I make sure New Jurisdictions widget is visible
         And I select Tax Year from the dropdown

    # Test Case ID: 1102545 & 1102553
    Scenario: User should be able to click on Show Details button and Use the filters of New Jurisdictions
         Given I open the application
         When I click on existing engagement
         Then I make sure New Jurisdictions widget is visible
         And I click on Show Details button
         Then I apply some filters and click on Reset Selection Button

