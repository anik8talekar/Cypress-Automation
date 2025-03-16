Feature: PDF Export

# Test Case ID: 1102519
Scenario: User should be able to Save Selected PDF Name Fields
         Given I open the application
         When I click on existing engagement
         Then I click on Admin and open Engagement Settings
         And I click on Custom PDF Name tab
         Then I turn on the Export Custom PDF Naming toggle button
         And I click on Save Selected Fields button
         And I make a POST request