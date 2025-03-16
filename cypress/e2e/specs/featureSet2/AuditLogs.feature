Feature: Audit Logs

# Test Case ID: 1095594
Scenario: User Should be able to Audit Logs Unmask EIN
    Given I Open the Application
    When I click on existing engagement
    And I Click on Document Center Section
    Then I Click on Documents tab
    And I Click on Masked EIN toggle button
    Then I Click on Executive Review tab from document center tab
    And I Click on Masked EIN toggle button for Executive Review
    Then I Click on Expected Documents tab from document center tab
    And I Click on Masked EIN toggle button for Expected Documents
    Then I Click on Business Entities tab from side menu
    And I Click on Masked EIN toggle button for Business Entities 
    Then I Click on Business Entities tab from Import and Export Data tab from side menu
    And I Click on Masked EIN toggle button for Import and Export Data Business Entities
    Then I Click on Admin tab
    And I Click on audit logs tab
    Then I Verify the file name under the grid

# Test Case ID: 1097851    
Scenario: User Should be able to Audit Logs Documents Approval
    Given I Open the Application
    When I click on existing engagement
    And I Click on Document Center Section
    Then I Click on Documents tab
    And I Select multiple documents and click on approve option from actions dropdown menu
    Then I Click on Masked EIN toggle button
    And I Click on Admin tab
    Then I Click on audit logs tab
    And I Click on Approval Logs tab
    Then I Verify the Approved file name under the grid

# Test Case ID: 1097861
Scenario: User Should be able to audit EL Language Confirmation logs for PwC Settings tab
    Given I Open the Application
    When I click on existing engagement
    And I Click on Admin tab from side menu
    Then I Click on Engagement Settings tab from admin menu
    And I click on Document Import and Export tab
    Then I click on PwC Settings tab and turn off the Enable PwC Document Collection toggle button
    And I Turn On the PwC Document Collection toggle button as a prerequisite
    Then I Click on Audit Logs tab
    And I click on EL Language Confirmation tab
    Then I verify the action under actions column

# Test Case ID: 1097861
Scenario: User Should be able to audit EL Language Confirmation logs for Canoe Settings tab
    Given I Open the Application
    When I click on existing engagement
    And I Click on Admin tab from side menu
    Then I Click on Engagement Settings tab from admin menu
    And I click on Document Import and Export tab
    Then I click on Canoe Settings tab and turn off the Enable Enable Canoe Document Collection Toggle Button
    And I Turn On the Canoe Document Collection  toggle button as a prerequisite
    Then I Click on Audit Logs tab
    And I click on EL Language Confirmation tab for verifying Canoe Settings
    Then I verify the action under actions column

# Test Case ID: 1097861
Scenario: User Should be able to audit EL Language Confirmation logs for Tax Docs Settings tab
    Given I Open the Application
    When I click on existing engagement
    And I Click on Admin tab from side menu
    Then I Click on Engagement Settings tab from admin menu
    And I click on Document Import and Export tab
    Then I click on Tax Docs Settings tab and turn off the Enable Mapping to Tax Document Engagements Toggle Button
    And I Turn On the Tax Document Engagements toggle button as a prerequisite
    Then I Click on Audit Logs tab
    And I click on EL Language Confirmation tab
    Then I verify the action under actions column