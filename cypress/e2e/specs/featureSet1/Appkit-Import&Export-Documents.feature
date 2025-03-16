Feature: Appkit- Import & Export- Documents

# Test Case ID: 1649861
Scenario: User should be able to Verify Documents new look and feel is implemented
   Given I open the application
   When I click on existing engagement
   Then I click on Import & Export Data and open Documents section
   And I verify new look and feel is implemented

# Test Case ID: 1649862 and 1786909
Scenario: User should be able to Verify Documents grid filters works as expected
   Given I open the application
   When I click on existing engagement
   Then I click on Import & Export Data and open Documents section
   And I apply some filters
   Then I verify filter results