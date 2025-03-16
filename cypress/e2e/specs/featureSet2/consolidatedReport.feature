Feature: Consolidated Report

# Test Case ID: 1094668
Scenario: User Should be able to download consolidated report

    Given I Open the Application
    When I click on existing engagement
    And I Click on Document Center Section
    Then I Click on Documents tab
    And I Select bulk documents and click on generate consolidated comparison report 
    Then I Click on Download Extract tab
    And I click on download button