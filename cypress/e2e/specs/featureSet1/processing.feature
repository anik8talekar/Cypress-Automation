Feature: Processing

  # Test Case ID: 1086467
  Scenario: User should be able to upload and process single file
    Given I open the application
    When I click on existing engagement
    And I open upload files section
    Then I click on upload files button and upload single file

  # Test Case ID: 1086467
  Scenario: User should be able to upload and process multiple files
    Given I open the application
    When I click on existing engagement
    And I open upload files section
    Then I click on upload files button and upload multiple files

  # Test Case ID: 1086979
  Scenario: User should be able to upload and process zip files
    Given I open the application
    When I click on existing engagement
    And I open upload files section
    Then I click on upload files button and upload zip file

  # Test Case ID: 1087015
  Scenario: System should be able to extract K-3 data
    Given I open the application
    When I click on existing engagement
    And I open upload files section
    Then I click on upload files button and upload K-3 file
    And I go to executive review under document center

  # Test Case ID: 1090055
  Scenario: User should be able to upload PFIC Statement via AI Services
    Given I open the application
    When I click on existing engagement
    And I open upload files section
    Then I click on upload files button and upload PFIC Statement

  # Test Case ID: 1086466
  Scenario: System should be able to complete the Processing of all Files
    Given I open the application
    When I click on existing engagement
    And I open upload files section
    Then I verify the processing of files gets completed successfully

  # Test Case ID: 1786768
  Scenario: User should be able to Verify Clear Error Message for Invalid File Format in Upload File Widget
    Given I open the application
    When I click on existing engagement
    Then I click on upload files button and upload file with invalid Format
    And I verify the proper error message

  # Test Case ID: 1786670
  Scenario: User should be able to Verify Columns from the document level grid disappear after adding a column to the file level grid
    Given I open the application
    When I click on existing engagement
    Then I open upload files section
    And I select columns from thr column chooser
    Then I verify that the columns are visible in the grid
