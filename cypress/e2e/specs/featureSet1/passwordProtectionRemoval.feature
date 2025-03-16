Feature: Password Protection Removal

  # Test Case ID: 1692685
  Scenario: User should be able to upload and verify status as fail for Test Case 1 pdf
    Given I open the application
    When I click on existing engagement
    And I open upload files section
    Then I click on upload files button and upload Test Case 1 file
    And I verify the Correct Status for Test Case 1 pdf

  # Test Case ID: 1692780
  Scenario: User should be able to upload and verify status as fail for Test Case 6 pdf
    Given I open the application
    When I click on existing engagement
    And I open upload files section
    Then I click on upload files button and upload Test Case 6 file
    And I verify the Correct Status for Test Case 6 pdf

  # Test Case ID: 1692820
  Scenario: User should be able to upload and verify status as fail for Test Case 7 pdf
    Given I open the application
    When I click on existing engagement
    And I open upload files section
    Then I click on upload files button and upload Test Case 7 file
    And I verify the Correct Status for Test Case 7 pdf

  # Test Case ID: 1693301
  Scenario: User should be able to upload and verify status as fail for Test Case 12 pdf
    Given I open the application
    When I click on existing engagement
    And I open upload files section
    Then I click on upload files button and upload Test Case 12 file
    And I verify the Correct Status for Test Case 12 pdf

  # Test Case ID: 1841156  Negative test case ID - 1841161
  Scenario: User should be able to upload and unlock password protected zip file
    Given I open the application
    When I click on existing engagement
    And I open upload files section
    Then I click on upload files button and upload password protected zip file
    And I verify that zip file is unlocked and getting processed

  # Test Case ID: 1786526 and 1784693
  Scenario: User should be able to upload and unlock password protected pdf file
    Given I open the application
    When I click on existing engagement
    And I open upload files section
    Then I click on upload files button and upload password protected pdf file
    And I verify that pdf file is unlocked and getting processed
