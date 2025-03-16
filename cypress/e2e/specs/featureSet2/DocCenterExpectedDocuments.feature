Feature: Document Center Expected Documents

# Test Case ID: 1093747
Scenario: User Should be able to add non direct connect expected document

    Given I Open the Application
    When I click on existing engagement
    And I Click on Document Center Section
    Then I Click on Expected Documents tab
    And I Click on add expected documnt button and turn off direct connect toggle button
    Then I Fill all the required information
    And I Click on Save Button
    Then I Verify expected document is added under expected documents tab

# Test Case ID: 1093815
Scenario: User Should be able to edit expected document

    Given I Open the Application
    When I click on existing engagement
    And I Click on Document Center Section
    Then I Click on Expected Documents tab
    And I Click on edit expected documnt button and edit some fields
    Then I Click on Save Button
    And I Verify expected document is added under expected documents tab

# Test Case ID: 1093853
Scenario: User Should be able to export grid data

    Given I Open the Application
    When I click on existing engagement
    And I Click on Document Center Section
    Then I Click on Expected Documents tab
    And I Click on Export All Data Button
    