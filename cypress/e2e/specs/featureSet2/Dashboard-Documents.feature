Feature: Dashboard- Documents

# Test Case ID: 1101639
Scenario: User Should be able to Display Document List
    Given I Open the Application
    When I click on existing engagement
    And I verify Top Saved Searches and Recently Updated Documents under the Documents card on Dashboard

# Test Case ID: 1101650
Scenario: User Should be able to verify Show Details Functionality
    Given I Open the Application
    When I click on existing engagement
    And I Click on Show Details button
    Then I verify it is navigating to Document Center Documents tab