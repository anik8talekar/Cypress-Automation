Feature: upload file redesign

    #Test Case ID: 1670879
    Scenario: User should able to verify the All Documents Tile Count
        Given I open the application
        When I click on existing engagement
        And I Click on Upload Files Section
        Then I verify the counts of all Documents and Processing Documents
        And I verify the counts of the Success Documents
        Then I verify the counts of the Deleted Documents


    #Test Case ID: 1732578
    Scenario: The User should able to verify the Tax Year of the Processed Document
        Given I open the application
        When I click on existing engagement
        And I Click on Upload Files Section
        Then I Upload a Document in the Upload Section
        And I search the uploaded file name in the grid
        Then I verify the Name and Tax Year of the file in grid

    #Test Case ID: 1702981
    Scenario: The User should able to verify the Floating Panel of the Upload Page
        Given I open the application
        When I click on existing engagement
        And I Click on Upload Files Section
        Then I Upload a Document under the Upload Section
        And I verify the Floating Panel of the Upload Page
        Then I verify the Header of the Floating Panel
        And I close the Floating Panel Slideout
