Feature: Custom Columns

    # Test Case ID: 1104184
    Scenario: User Should be able to Create Custom Columns
        Given I Open the Application
        When I click on existing engagement
        And I Click on Admin tab from side menu
        Then I Click on Engagement Settings tab from admin menu
        And I Click on Custom Columns tab
        Then I Click on Add Custom Column Button
        And I click on Add Value Button and add values under new value text field and also add column name
        Then I Verify the newly created column with values is visible in Document Center Documents tab
        And I Verify the newly created column with values is visible in Document Center Executive Review tab
        Then I Verify the newly created column with values is visible in Document Center Expected Documents tab
        And I Delete newly created custom column for prerequiste step

    # Test Case ID: 1104215
    Scenario: User Should be able to Ensure custom column selections show are consistent between Doc Center screens
        Given I Open the Application
        When I click on existing engagement
        And I Go to Document Center Documents tab and click on edit button besides any document under actions column
        Then I Go to Column Name drop down under edit document slideout and Change values of the columns
        And I Click on Save Button
        Then I Click on the dropdown besides actions dropdown and Uncheck a column name from the dropdown from Documents Tab
        And I Verify Unchecked column is not present in the grid
        Then I Click on the dropdown besides actions dropdown and Uncheck a column name from the dropdown from Executive Review Tab
        And I Verify Unchecked column is not present in the grid for Executive Review Tab
        Then I Click on the dropdown besides actions dropdown and Uncheck a column name from the dropdown from Expected Documents Tab
        And I Verify Unchecked column is not present in the grid for Expected Documents Tab

    # Test Case ID: 1104222
    Scenario: User Should be able to Apply custom columns in bulk
        Given I Open the Application
        When I click on existing engagement
        And I Go to Document Center Documents tab and Select Multiple Documents
        Then I click on Set Custom Columns Option from Actions Dropdown from Documents Tab
        And I Set the values from the dropdowns from the set custom columns slideout
        Then I Click on save button
        And I click on Set Custom Columns Option from Actions Dropdown from Expected Documents Tab