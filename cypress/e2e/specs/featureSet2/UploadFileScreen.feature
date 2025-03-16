Feature: Upload File Screen

    # Test Case ID: 1094726
    Scenario: User Should be able to Verify filters for all the fields available in grid

        Given I Open the Application
        When I click on existing engagement
        And I Click on Upload Files Section
        Then I Click on Search icon under File Name Column and choose contains option
        And I Verify the searched file name
        Then I Click on Search icon under Pages Column and choose equals option
        And I Verify the page nos are equals in the grid

    # Test Case ID: 1094768
    Scenario: User Should be able to Verify Column Chooser functionality

        Given I Open the Application
        When I click on existing engagement
        And I Click on Upload Files Section
        Then I Click on Column Chooser logo
        And I Check a Checkbox which is unchecked for column name field
        Then I Verify column name is added in the grid
        And I Uncheck a Checkbox which is checked for column name field
        Then I Verify column name is removed in the grid

    # Test Case ID: 1094760
    Scenario: User Should be able to Verify Export To Excel functionality

        Given I Open the Application
        When I click on existing engagement
        And I Click on Upload Files Section
        Then I Click on Export to Excel Button


