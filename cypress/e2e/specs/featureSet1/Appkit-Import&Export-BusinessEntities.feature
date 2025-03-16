Feature: Appkit - Import and Export - Business Entities

   # Test Case ID: 1650348
   Scenario: User should be able to Verify Business Entities - new look and feel
         Given I open the application
         When I click on Admin and open Business Entities Tab
         Then I verify new look and feel is implemented

   # Test Case ID: 1650349
   Scenario: User should be able to Verify Business Entities - Filters work properly
         Given I open the application
         When I click on Admin and open Business Entities Tab
         Then I apply some filters
         And I verify filter results

   # Test Case ID: 1650352
   Scenario: User should be able to Verify Business Entities - Infinite pagination
         Given I open the application
         When I click on Admin and open Business Entities Tab
         And I scroll to bottom of the page
         Then I verify site provider is visible at the bottom of the page