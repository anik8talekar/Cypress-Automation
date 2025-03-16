Feature: Dashboard- Expected, Actual and Prior Year

# Test Case ID: 1099211
Scenario: User Should be able to use Card Year Filter
    Given I Open the Application
    When I click on existing engagement
    And I Click on Tax Year Dropdown
    Then I choose 2021 Tax Year
    And I verify month and year from the chart

# Test Case ID: 1099214
Scenario: User Should be able to view Summary Details Filter
    Given I Open the Application
    When I click on existing engagement
    And I Click on Show Details Button
    Then I verify the summary chart

# Test Case ID: 1099237
Scenario: User Should be able to view Grid Details Filter
    Given I Open the Application
    When I click on existing engagement
    And I Click on Show Details Button
    Then I verify grid for Investment Name Investor Schedule Name and Dates

# Test Case ID: 1099238
Scenario: User Should be able to view Left Side Filters
    Given I Open the Application
    When I click on existing engagement
    And I Click on Show Details Button
    Then I Select Left Side Filters
    And I Verify them under grid