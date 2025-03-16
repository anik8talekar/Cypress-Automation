Feature: Appkit - Change title for Appkit Standard

   # Test Case ID: 1648483
   Scenario: User should be able to Verify Security Authorization: Appkit Tiles Design
         Given I open the application
         When I click on Admin and open Security Authorization Tab
         Then I click on Pending Requests Tab
         And I verify the titles

   # Test Case ID: 1648496
   Scenario: User should be able to Verify Security Authorization: Tiles Functionality
         Given I open the application
         When I click on Admin and open Security Authorization Tab
         Then I click on Pending Requests Tab
         And I verify the titles
         Then I verify the count of both Tiles