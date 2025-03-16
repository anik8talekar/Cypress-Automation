Feature: Compare Documents

# Test Case ID: 1092104
Scenario: User Should be able to Compare Documents from Doc Center tab

    Given I Open the Application
    When I click on existing engagement
    And I Click on Document Center Section
    Then I Click on Documents tab
    And I Select Multiple documents
    Then I Click On Actions Button
    And I Click on view side by side option
    Then I verify Investment name from compare documents screen
    
    