Feature: Form 8621P2

# Test Case ID: 1227063
Scenario: User Should be able to Send to GoSystem multiple 8621 instances from K-1

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Footnotes Tab
    Then I Select multiple 8621 instances
    And I Click Export to GoSystem button above the grid
    And I Expand Destination dropdown
    Then I Select one of the destinations
    And I Click on Export Button

# Test Case ID: 1227099
Scenario: User Should be able to Send to GoSystem multiple 8621 instances from K-3

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Open a 2022 K-3 Doc & go to Part VII Section 1 & 2 tab
    Then I Select multiple 8621 instances
    And I Click Export to GoSystem button above the grid
    And I Expand Destination dropdown
    Then I Select one of the destinations
    And I Click on Export Button

# Test Case ID: 1227109
Scenario: User Should be able to Send to GoSystem a single 8621 instance from Executive Review

    Given I Open the Application
    When I click on existing engagement
    And I go to Executive Review page and Select K-1 Document having a 8621 instance
    And I open 8621 details for the document selected
    Then I Select a single 8621 instance
    And I Click Export to GoSystem button above the grid from Executive Review
    And I Expand Destination dropdown
    Then I Select one of the destinations
    And I Click on Export Button

# Test Case ID: 1227121
Scenario: User Should be able to Send to GoSystem a single 8621 instance from K-1

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Footnotes Tab
    Then I Select a single 8621 instance
    And I Click Export to GoSystem button above the grid from K-1 Review Page
    And I Expand Destination dropdown
    Then I Select one of the destinations
    And I Click on Export Button

# Test Case ID: 1227211
Scenario: User Should be able to Send to GoSystem a single 8621 instance from K-3

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Open a 2022 K-3 Doc & go to Part VII Section 1 & 2 tab
    Then I Select a single 8621 instance
    And I Click Export to GoSystem button above the grid from K-3 Review Page
    And I Expand Destination dropdown
    Then I Select one of the destinations
    And I Click on Export Button

# Test Case ID: 1228033
Scenario: User Should not be able to Select more than 20 8621 instances from K-1 review

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Open a 2022 K-1 Doc having more than 20 8621 instances & go to Footnotes Tab
    Then I Select more than 20 8621 instances
    And I Try to Click Export to GoSystem button above the grid and Verify the Tooltip Message for fed k1

# Test Case ID: 1227291
Scenario: User Should not be able to Select more than 20 8621 instances from K-3 review

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Open a 2022 K-3 Doc having more than 20 8621 instances & go to Part VII Section 1 tab
    Then I Select more than 20 8621 instances from K-3 review page
    And I Try to Click Export to GoSystem button above the grid and Verify the Tooltip Message

# Test Case ID: 1227313
Scenario: User Should not be able to Send Zero 8621 instances to GoSystem

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Footnotes Tab
    Then I Try to Click Export to GoSystem button above the grid without Selecting any 8621 instance and Verify the Tooltip Message

# Test Case ID: 1228040
Scenario: User Should not be able to Select more than 20 8621 instances from Executive Review

    Given I Open the Application
    When I click on existing engagement
    And I go to Executive Review page and Select K-1 Document having more than 20 8621 instance
    And I open 8621 details for the document selected
    Then I Select more than 20 8621 instances from Executive Review page
    And I Try to Click Export to GoSystem button above the grid and Verify the Tooltip Message