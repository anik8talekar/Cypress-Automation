Feature: Dashboard- Uploads

    # Test Case ID: 1101638
    Scenario: User Should be able to see details of Upload files
        Given I Open the Application
        When I click on existing engagement
        And I Click on Show Details button
        Then I verify it is navigating to Upload Files tab

    # Test Case ID: 1101617
    Scenario: User Should be able to Upload Files of Correct Format
        Given I Open the Application
        When I click on existing engagement
        And I Click on Upload button and upload a Schedule K1 Pdf File from Upload card on the dashboard
        Then I Check the uploaded file under Recently Uploaded Files tab on the card

    # Test Case ID: 1101627
    Scenario: User Should be able to see error message for large files
        Given I Open the Application
        When I click on existing engagement
        And I Click on Upload button and upload a Large Exe File from Upload card on the dashboard

