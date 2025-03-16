Feature: Form 8621

# Test Case ID: 1226990
Scenario: User Should be able to Create a Destination in Settings

    Given I Open the Application
    When I click on existing engagement
    And I click on Admin tab and go to Engagement Settings tab
    Then I Click on Document Import & Export tab & go to GoSystem Settings tab
    And I Click on Add Destination Button & fill the required information in slideout
   
# # Test Case ID: 1226989
Scenario: User Should be able to Disable GoSystem toggle button in Engagement Settings

    Given I Open the Application
    When I click on existing engagement
    And I click on Admin tab and go to Engagement Settings tab
    Then I Click on Document Import & Export tab & go to GoSystem Settings tab
    And I Turn off Enable Mapping to GoSystem toggle button
    And I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Footnotes tab
    Then I Check for Export to GoSystem 8621 instances or above the grid are disabled
    And I go to Document Center Documents tab & Open a 2022 K-3 Doc & go to Part VII Section 1 & 2 tab
    Then I Check for Export to GoSystem 8621 instances or above the grid are disabled
    And I go to Executive Review page and open 8621 details for both 2022 K-1 and K-3
    Then I Check for Export to GoSystem 8621 instances or above the grid are disabled

# Test Case ID: 1226988
Scenario: User Should be able to Enable GoSystem toggle buttopn in Engagement Settings

    Given I Open the Application
    When I click on existing engagement
    And I click on Admin tab and go to Engagement Settings tab
    Then I Click on Document Import & Export tab & go to GoSystem Settings tab
    And I Turn on Enable Mapping to GoSystem toggle button
    And I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Footnotes tab
    # Then I Check for Export to GoSystem 8621 instances or above the grid are enabled
    And I go to Document Center Documents tab & Open a 2022 K-3 Doc & go to Part VII Section 1 & 2 tab
    Then I Check for Export to GoSystem 8621 instances or above the grid are enabled
    And I go to Executive Review page and open 8621 details for both 2022 K-1 and K-3
    Then I Check for Export to GoSystem 8621 instances or above the grid are enabled

# Test Case ID: 1226991
Scenario: User Should be able to Delete a Destination in Settings

    Given I Open the Application
    When I click on existing engagement
    And I click on Admin tab and go to Engagement Settings tab
    Then I Click on Document Import & Export tab & go to GoSystem Settings tab
    And I Click on Delete Destination Button

# Test Case ID: 1226992
Scenario: User Should be able to Send to GoSystem multiple instances with the same name from the same K-1 document

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Footnotes Tab
    Then I Select two 8621 instances with the same PFIC Name
    And I Click Export to GoSystem button above the grid
    And I Expand Destination dropdown
    Then I Select one of the destinations
    And I Click on Export Button
    Then I Check selected destination in GoSystem

# Test Case ID: 1226993
Scenario: User Should be able to Send to GoSystem multiple instances with the same name from the same K-3 document

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Open a 2022 K-3 Doc & go to Part VII Section 1 & 2 Tab
    Then I Select two 8621 instances with the same PFIC Name
    And I Click Export to GoSystem button above the grid
    And I Expand Destination dropdown
    Then I Select one of the destinations
    And I Click on Export Button
    Then I Check selected destination in GoSystem

# Test Case ID: 1226995
Scenario: User Should be able to Send to GoSystem where address is too long

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Open a 2022 K-1 Doc with a 8621 instance with address field exceeding 35 characters
    Then I Go to Footnotes tab of Same Document
    And I Click Export to GoSystem button next to a 8621 instance
    And I Expand Destination dropdown
    Then I Select one of the destinations
    And I Click on Export Button
    Then I Check selected destination in GoSystem

# Test Case ID: 1227027
Scenario: User Should be able to Send to GoSystem multiple instances with the same name from both K-1 & K-3 document

    Given I Open the Application
    When I click on existing engagement
    And I go to Executive Review page and Select K-1 & K-3 Documents having multiple 8621 instances having same PFIC name
    Then I open 8621 details for both the documents selected
    And I Select multiple 8621 instances from both K-1 & K-3 having same PFIC name
    And I Click Export to GoSystem button above the grid
    And I Expand Destination dropdown
    Then I Select one of the destinations
    And I Click on Export Button

# Test Case ID: 1227052
Scenario: User Should be able to Send to GoSystem multiple instances from both K-1 and K-3 on Executive Review

    Given I Open the Application
    When I click on existing engagement
    And I go to Executive Review page and Select K-1 & K-3 Documents having multiple 8621 instances
    And I open 8621 details for both the documents selected
    Then I Select multiple 8621 instances from both K-1 & K-3 
    And I Click Export to GoSystem button above the grid
    And I Expand Destination dropdown
    Then I Select one of the destinations
    And I Click on Export Button