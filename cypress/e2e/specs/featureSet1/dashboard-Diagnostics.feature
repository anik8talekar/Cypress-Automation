Feature: Dashboard - Diagnostics

    # Test Case ID: 1102529
    Scenario: User should be able to see Diagnostics details
         Given I open the application
         When I click on existing engagement
         Then I verify the details for Diagnostics Widget

    # Test Case ID: 1839103
    Scenario: User should be able to search engagement in the above dropdown
         Given I open the application
         When I click on existing engagement
         Then I search and verify the engagement name in the search dropdown
         
         
         