Feature: Upload File Redesign

    # Test Case ID: 1670889
    Scenario: User should able to check the file type before uploading in the application
        Given I open the application
        When I click on existing engagement
        And I Click on Upload Files Section
        Then I click on the Upload button
        And I verify the HTML text for the file type and limitations
        Then I verify the upload file type with the supported format
        And I verify the upload file type with the unsupported format

    #Test Case ID: 1672185
    Scenario: User should able to check upload file count in the Upload Files section
        Given I open the application
        When I click on existing engagement
        And I Click on Upload Files Section
        Then I click on the Upload button
        And I upload the multiple files under the upload section
        Then I verify the uploaded file count under the upload section
        And I verify the uploaded file with the error

    #Test Case ID: 1669409
    Scenario: The User should able to verify the Upload page components
        Given I open the application
        When I click on existing engagement
        And I Click on Upload Files Section
        Then I verify the buttons of the Upload Page