Feature: FoF Automation

# Test Case ID: 1639434
Scenario: User Should be able to Check the presence of taxonomy column

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Select a 2023 K-1 Doc
    And I Click on Actions dropdown & Click on Generate FoF Extract option
    Then I go to Download Extracts tab 
    And I Download the Generted FoF Extract Document

# Test Case ID: 1637976
Scenario: User Should not be able to See Generate FoF Extract Option for non 2023 Fed K1 Docs

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Select a 2022 K-3 Doc
    And I Click on Actions dropdown & Check for Generate FoF Extract option
    Then I verify Generate FoF Extract Option is disabled
  
# Test Case ID: 1640724
Scenario: User Should be able to Verify Horizontal Scrollbar functionality

    Given I Open the Application
    When I click on existing engagement
    And I go to Business Entities Tab
    And I Check if the horizontal scrollbar is visible without scrolling down
    Then I scroll to right columns & check it is scrolling up & down or not

# Test Case ID: 1637958
Scenario: User Should be able to Add FoF Extract Button to Document Center

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Select a 2023 K-1 Doc
    Then I Verify Generate FoF Extract Option is enabled
    And I go to Document Center Documents tab & Select a 2022 K-3 Doc
    And I Click on Actions dropdown & Check for Generate FoF Extract option
    Then I verify Generate FoF Extract Option is disabled
    And I Select non-2023 Federal K-1 documents along with 2023 Federal K-1 documents 
    And I Click on Actions dropdown & Click on Generate FoF Extract option
    Then I go to Download Extracts tab & verify Number of Documents sent for extratction

# Test Case ID: 1640536
Scenario: User Should be able to Check Federal Row showing at the top of the State Source grid

    Given I Open the Application
    When I click on existing engagement
    And I go to Document Center Documents tab & Select a 2023 K-1 Doc
    And I Open Review Page for the selected document
    And I go to View by dropdown and select State Source
    Then I Verify Federal row is not expandable