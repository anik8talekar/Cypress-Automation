Feature: Allocable Item Review Grid

    #Test Case ID: 1789029 & 1807587
    Scenario: User should able to verify the Allocable Item Review Grid with Standard Description
        Given I Open the Application
        When I click on existing engagement
        And I click on the Admin section
        Then I click on the Direct Connect
        And I add the Direct Connect Profile
        Then I edit the Direct Connect profile
        # And I create BE from TRACK FTE and import it
        Then I go to Allocable Item Template section
        And I add and edit new Allocable Template
        Then I verify the default Standard Description mapping in the Allocable Item Template
        Then I map the Allocable Item Templates
        Then I upload a file under the Upload Files section
        And I Click on Expected Documents Section
        Then I add a new Expected Document
        And I navigate to the Documents Section
        Then I Match the Document with Expected Document
        And I review the document
        Then I verify and edit the Standard Description in the Document Grid


    #Test Case ID: 1789029 & 1807587
    Scenario: User should able to verify the Allocable Item Review Grid without Standard Description
        Given I Open the Application
        When I click on existing engagement
        And I click on the Admin section
        Then I click on the Direct Connect
        And I add the Direct Connect Profile without Standard Description
        Then I edit the Direct Connect profile without Standard Description
        Then I go to Allocable Item Template section
        And I add and edit new Allocable Template without Standard Description
        Then I map the Allocable Item Templates without Standard Description
        Then I upload a file under the Upload Files section
        And I Click on Expected Documents Section
        Then I add a new Expected Document for without Standard Description
        And I navigate to the Documents Section
        Then I Match the Document with Expected Document for without Standard Description
        And I review the document
        Then I verify and edit the TRACk Taxonomy Description in the Document Grid