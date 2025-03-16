Feature: Reprocessing

  # Test Case ID: 1786670
  Scenario: Columns from the document level grid disappear after adding a column to the file level grid
    Given I open the application
    When I click on existing engagement
    And I open upload files section
    Then I go to Document Level Grid
    And I choose column from column chooser
    Then I verify that column is present in Document Level Grid

  # Test Case ID: 1739172
  Scenario: Upload file floating panel: Fixes after design review
    Given I open the application
    When I click on existing engagement
    And I open upload files section
    Then I click on upload files button and upload single file

  # Test Case ID: 1733092
  Scenario: Updates in UI to support "File" Reprocessing
    Given I open the application
    When I click on existing engagement
    And I open upload files section for Reprocessing
    Then I Select a 2023 File that has been processed Successfully
    And I Click On Reprocess Button besides that file name 
    And I Click on Yes popup
    Then I Check Reprocessing is Started for that file
    Then I Select a 2023 File that has an Error while processing
    And I Click On Reprocess Button besides that file name
    And I Click on Yes popup
    Then I Check Reprocessing is Started for that file

  # Test Case ID: 1733092
  Scenario: Updates in UI to support "File" Reprocessing for Approved Documents
    Given I open the application
    When I click on existing engagement
    And I open upload files section for Reprocessing
    Then I Select a 2023 File that has been processed Successfully & Approved
    And I Open the Review Page of that by Clicking the Doc Name after Expanding File Name
    Then I Approve the Document by Clicking on Approve Button
    And I Go to Upload Files Section & Check the Reprocess Button is disabled

  # Test Case ID: 1732722
  Scenario: Updates in UI to support "Document" Reprocessing
    Given I open the application
    When I click on existing engagement
    And I open upload files section for Reprocessing
    Then I Select a 2023 File that has been processed Successfully
    And I Click on the Expand Icon besides the File Name
    Then I Check for Tax Year Column is not editable
    And I Check for Schedule Column is not editable

  # Test Case ID: 1732777
  Scenario: Uploaded | Detailed Messages (mapped from Processing Status)
    Given I open the application
    When I click on existing engagement
    And I open upload files section for Reprocessing
    Then I Check the status for an Successfully Uploaded Document
    And I Check the status for an Error in Uploaded Document
    Then I Check the status for an Deleted Uploaded Document
    And I Check the status for an Password Locked Document
    Then I Check the status for an Processing Document

  # Test Case ID: 1769267
  Scenario: User Should be able to Rearrange columns
    Given I open the application
    When I click on existing engagement
    And I open upload files section for Reprocessing
    Then I Verify the Default Columns in the grid at File Level
    And I try to hide the Default Columns through Columns dropdown for File Level
    And I Click on the Expand Icon besides the File Name for Document Level
    Then I Verify the Default Columns in the grid at Document Level
    And I try to hide the Default Columns through Columns dropdown for Document Level
