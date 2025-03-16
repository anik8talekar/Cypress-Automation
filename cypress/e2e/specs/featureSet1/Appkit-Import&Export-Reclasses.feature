Feature: Appkit- Import & Export- Reclasses

# Test Case ID: 1648532
Scenario: User should be able to Verify Reclasses new look and feel is implemented
   Given I open the application
   When I click on existing engagement
   Then I click on Import & Export Data and open Reclasses section
   And I verify new look and feel is implemented

# Test Case ID: 1648534
Scenario: User should be able to Verify Reclasses grid filters works as expected
   Given I open the application
   When I click on existing engagement
   Then I click on Import & Export Data and open Reclasses section
   And I apply some filters
   Then I verify filter results