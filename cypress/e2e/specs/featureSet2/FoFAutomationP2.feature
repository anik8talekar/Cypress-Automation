Feature: FoF Excel Automation 

# Test Case ID: 1639434
Scenario: User Should be able to Check the presence of taxonomy column

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Select a 2023 K-1 Doc
    And I Click on Actions dropdown & Click on Generate FoF Extract option
    Then I go to Download Extracts tab 
    And I Download the Generted FoF Extract Document
    Then I check the presence of taxonomy column in the Excel

# Test Case ID: 1640633
Scenario: User Should be able to Display footnotes summary

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Select a 2023 K-1 Doc
    And I Click on Actions dropdown & Click on Generate FoF Extract option
    Then I go to Download Extracts tab 
    And I Download the Generted FoF Extract Document
    Then I check the footnotes summary sheets in the Excel