Feature: Smart k1

# Test Case ID: 1096860
Scenario: User Should be able to Publish K1s Request Entity selection returns entities requested
    Given I Open the Application
    When I click on existing engagement
    And I Click on Admin tab from side menu
    Then I Click on Engagement Settings tab from admin menu
    And I click on Document Import and Export tab
    And I Select a Tax Year from dropdown
    Then I Click on Request Entity dropdown and choose a Entity
    And I Click on Request Button
    Then I check for the status of entity under Approval Status column

# Test Case ID: 1097021 
Scenario: User Should be able to delete Publish K1s entity requested
    Given I Open the Application
    When I click on existing engagement
    And I Click on Admin tab from side menu
    Then I Click on Engagement Settings tab from admin menu
    And I click on Document Import and Export tab
    And I Select a Tax Year from dropdown
    Then I Click on Request Entity dropdown and choose a Entity
    And I Click on Request Button
    Then I Click on Delete Button under actions column
    And I verify the entity is deleted

# Test Case ID: 1098814
Scenario: User Should be able to capture confirmation and disabling functionality
    Given I Open the Application
    When I click on existing engagement
    And I Click on Admin tab from side menu
    Then I Click on Engagement Settings tab from admin menu
    And I click on Document Import and Export tab
    Then I click on PwC Settings tab and turn on and off the Enable PwC Document Collection toggle button
    And I Click on Audit logs from admin side menu
    Then I Click on EL Language Confirmation tab 
    And I Check for actions column

# Test Case ID: 1097035
Scenario: User Should be able to see Available Document Page Changes
    Given I Open the Application
    When I click on existing engagement
    And I Click on Admin tab from side menu
    Then I Click on Engagement Settings tab from admin menu
    And I click on Document Import and Export tab
    Then I click on PwC Settings tab and turn on and off the Enable PwC Document Collection toggle button
    And I Select 2021 Tax Year from dropdown
    Then I Click on Request Entity dropdown and choose a LUCILLE BLUTH FUND Entity
    And I Click on Request Button
    Then I check for the approval requested status of entity under Approval Status column
    And I go to Document Center Available documents tab and check for the Approval Requested Counter
    Then I Approve the entity from actions column under PwC settings tab and verify approved status message
    And I go to Document Center Available documents tab and check for the Available for Retrieval Counter
    Then I Delete the requested entity as a prequisite step
  

