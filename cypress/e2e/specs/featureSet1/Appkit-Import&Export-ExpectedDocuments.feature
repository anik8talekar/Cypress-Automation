Feature: Appkit - Import and Export - Expected Documents

   # Test Case ID: 1650310
   Scenario: User should be able to Verify Expected Documents - new look and feel
         Given I open the application
         When I click on Admin and open Expected Documents Tab
         Then I verify new look and feel is implemented

   # Test Case ID: 1650311
   Scenario: User should be able to Verify Expected Documents - Filters work properly
         Given I open the application
         When I click on Admin and open Expected Documents Tab
         Then I apply some filters
         And I verify filter results

   # Test Case ID: 1650315
   Scenario: User should be able to Verify Expected Documents - Infinite pagination
         Given I open the application
         When I click on Admin and open Expected Documents Tab
         And I scroll to bottom of the page
         Then I verify site provider is visible at the bottom of the page