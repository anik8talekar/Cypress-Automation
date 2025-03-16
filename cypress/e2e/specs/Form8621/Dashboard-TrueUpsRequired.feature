Feature: Dashboard-True Ups Required, Tax Year and Show Details

    # Test Case ID: 1102601
    Scenario: The User should able to select a Tax Year
        Given I Open the Application
        When I click on existing engagement
        And I click on Tax Year Dropdown
        Then I choose 2022 Tax Year
        And I verify chart for the 2022 Tax Year

    # Test Case ID: 1102611
    Scenario: The User should able to see show details and apply filters
        Given I Open the Application
        When I click on existing engagement
        And I click on show details and apply filters
        Then I click on Tax Dropdown and select 2022 Tax Year
        And I select Process Date and Final Date
        Then I verify the Summary Information
        And I verify the grid column names

    # Test Case ID: 1637932
    Scenario: The User should able to see True Ups Requirement list
        Given I Open the Application
        When I click on existing engagement
        And I navigate to the Dashboard-True Ups Required field
        Then I verify all fields are present in widget
