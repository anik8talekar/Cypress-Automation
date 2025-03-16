Feature: Appkit - Security Authorization

   # Test Case ID: 1650216
   Scenario: User should be able to Verify Users Tab - new look and feel
         Given I open the application
         When I click on Admin and open Security Authorization Tab
         Then I verify new look and feel is implemented

   # Test Case ID: 1650217
   Scenario: User should be able to Verify Users Tab - Filters work properly
         Given I open the application
         When I click on Admin and open Security Authorization Tab
         Then I apply some filters
         And I verify filter results

   # Test Case ID: 1650218
   Scenario: User should be able to Verify Users Tab - Infinite pagination
         Given I open the application
         When I click on Admin and open Security Authorization Tab
         And I scroll to bottom of the page
         Then I verify site provider is visible at the bottom of the page