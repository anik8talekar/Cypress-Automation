Feature: Expected Documents Rollover

# Test Case ID: 1095592
Scenario: User Should be able to Add Expected Documents Rollover
    Given I Open the Application
    When I click on existing engagement
    And I Click on Admin tab from side menu
    Then I Click on Engagement Settings tab from admin menu
    And I click on Expected Documents Rollover tab
    Then I Select Tax Year from Tax Year drop down
    And I Select Document by clicking on checkbox besides the Document
    Then I Click on Roll Over Button
    And I Click on Yes Option from the popup 
    Then I choose a Direct Connect Profile from Drop Down 
    And I Select All the profiles and click on Bulk Assign Button
    Then I Select Options from drop down for Direct Connect Profile,Taxonomy Template and Assign in TRACK to
    And I Click on Assign Button
    Then I Click on Roll Over Button for Bulk Assign
