Feature: Review Levels

# Test Case ID: 1104225
Scenario: User Should be able to set Custom Review Levels Description via Engagement Settings tab
    Given I Open the Application
    When I click on existing engagement
    And I Click on Admin tab from side menu
    Then I Click on Engagement Settings tab from admin menu
    And I click on Review Levels tab
    Then I Turn ON the PwC Document Review Levels toggle button and Click on Custom Review Level Description Right Arrow
    And I Click on Add Review Level Button 
    Then I Verify Review Level is added under Review Level Grid

# Test Case ID: 1104260
Scenario: User Should be able to Edit custom Review Level Descriptions Columns 
    Given I Open the Application
    When I click on existing engagement
    And I Click on Admin tab from side menu
    Then I Click on Engagement Settings tab from admin menu
    And I click on Review Levels tab
    Then I Expand the Custom Review Level Description Right Arrow and click on edit button under actions column
    And I Edit Custom Description from Edit Review Level Slideout
    And I Click on Save Button 
    Then I Verify Review Levels Description from the grid

# Test Case ID: 1108231
Scenario: User Should be able to Set Review Levels for Documents 
    Given I Open the Application
    When I click on existing engagement
    And I Go to Document Center Documents tab and click on edit button besides any document under actions column
    And I Go to PwC Document Review Level Dropdown and Set the highest Review Level value
    Then I Go to Client Review Level Dropdown and set the highest Review Level value
    And I Click on Save Button 

# Test Case ID: 1108232
Scenario: User Should not be able to Approve Documents Without Highest Review Levels 
    Given I Open the Application
    When I click on existing engagement
    And I Go to Document Center Documents tab and click on edit button besides any document under actions column
    And I Go to PwC Document Review Level Dropdown and Set its level to lowest
    Then I Go to Client Review Level Dropdown and Set its level to lowest
    And I Click on Save Button 
    Then I Select that document and check for diasbled approve button under actions dropdown
    
    