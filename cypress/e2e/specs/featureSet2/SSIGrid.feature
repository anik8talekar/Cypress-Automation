Feature: SSI Grid

    # Test Case ID: 1581976
    Scenario: User should able to add custom Taxonomy mapping
        Given I Open the Application
        When I click on existing engagement
        Then I click on the Admin section
        And I click on the Direct Connect
        Then I add the Direct Connect Profile without Standard Description
        And I edit the Direct Connect profile without Standard Description
        Then I go to Allocable Item Template section
        And I add a new Allocable Template
        Then I complete a TRACK Taxonomy Mapping
        And I upload a file under the Upload Files section
        Then I Click on Expected Documents Section
        And I add a new Expected Document for without Standard Description

    # Test Case ID: 1616775
    Scenario: User should able to open PDF K-1 in new tab
        Given I Open the Application
        When I click on existing engagement
        And I click on Upload files section
        Then I upload the Fed K-1 file under Upload Files section
        And I open the Document Center section
        Then I open Fed K-1 PDF in new tab

    # Test Case ID: 1616775
    Scenario: User should able to open PDF K-3 in new tab
        Given I Open the Application
        When I click on existing engagement
        And I click on Upload files section
        Then I upload the Fed K-3 file under Upload Files section
        And I open the Document Center section
        Then I open Fed K-3 PDF in new tab


