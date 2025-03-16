Feature: Appkit- Import & Export-Import Status

# Test Case ID: 1610526
Scenario: User should be able to Verify Import Status new look and feel is implemented
   Given I open the application
   When I click on existing engagement
   Then I click on Import & Export Data and open Import Status section
   And I verify new look and feel is implemented

# Test Case ID: 1610532
Scenario: User should be able to Verify Import Status grid filters works as expected
   Given I open the application
   When I click on existing engagement
   Then I click on Import & Export Data and open Import Status section
   And I apply some filters
   Then I verify filter results