Feature: Appkit - Schedule Management - Manage Schedule Data

   # Test Case ID: 1650361
   Scenario: User should be able to Verify Manage Schedule Data - new look and feel
         Given I open the application
         When I click on Admin
         Then I click on Schedule Management button
         And I click on Manage Schedule Data button
         Then I verify new look and feel is implemented

   # Test Case ID: 1650362
   Scenario: User should be able to Verify Manage Schedule Data - Filters work properly
         Given I open the application
         When I click on Admin
         Then I click on Schedule Management button
         And I click on Manage Schedule Data button
         Then I apply some filters
         And I verify filter results

   # Test Case ID: 1650366
   Scenario: User should be able to Verify Manage Schedule Data - Infinite pagination
         Given I open the application
         When I click on Admin
         Then I click on Schedule Management button
         And I click on Manage Schedule Data button
         And I scroll to bottom of the page
         Then I verify site provider is visible at the bottom of the page