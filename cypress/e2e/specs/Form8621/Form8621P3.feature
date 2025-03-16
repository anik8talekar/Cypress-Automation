Feature: Form 8621P3

# Test Case ID: 1228043
Scenario: User Should be able to Edit values in 8621 preview on K-1 document, check in grid

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Footnotes Tab
    And I Click on Preview icon next to one of 8621 instances
    Then I Edit Multiple Values like Checkbox,text input,numerical value,date input
    And I also edit an empty field & add an value in empty field
    Then I Verify all the edited values are reflected in grid

# Test Case ID: 1228044
Scenario: User Should be able to Edit values in 8621 preview on K-3 document, check in grid

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Open a 2022 K-3 Doc & go to Part VII Section 1 & 2 tab
    And I Click on Preview icon next to one of 8621 instances
    Then I Edit Multiple Values like Checkbox,text input,numerical value,date input
    And I also edit an empty field & add an value in empty field
    Then I Verify all the edited values are reflected in grid from k-3 review page grid

# Test Case ID: 1228061
Scenario: User Should be able to Edit values in 8621 preview on Executive Review, check in grid

    Given I Open the Application
    When I click on existing engagement
    And I go to Executive Review page and Select K-1 Document having a 8621 instance
    And I open 8621 details for the document selected
    And I Click on Preview icon next to one of 8621 instances
    Then I Edit Multiple Values like Checkbox,text input,numerical value,date input
    And I also edit an empty field & add an value in empty field
    Then I Verify all the edited values are reflected in grid from Executive review page grid