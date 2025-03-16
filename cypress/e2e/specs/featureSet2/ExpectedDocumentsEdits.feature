Feature: Expected Documents Edits

    #Test Case ID: 1795232
    Scenario: User should able to edit the Expected Documents
        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Expected Documents Section
        And I add a new Expected Document
        Then I select the Unmatched Document
        And I edit the Unmatched Document
        Then I edit the Matched Document