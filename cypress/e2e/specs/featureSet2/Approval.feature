Feature: Approval

    # Test Case ID: 1092898
    Scenario: User Should be able to approve documents from review screen tab

        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Select multiple pending documents
        And I Click on Review Icon Under Actions Column
        Then I Click on Approve Button from Review Screen

    # Test Case ID: 1092941
    Scenario: User Should be able to unapprove documents from review screen tab

        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Select a Approved Document and click on review icon
        Then I Click on Unapprove Button from Review Screen
        And I Click on unapprove from the popup
        Then I verify the document is unapproved or not from documents tab

    # Test Case ID: 1092913
    Scenario: User Should not be able to edit Schedule Items/details and others for approved documents

        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I search for edit button for approved documents

    # Test Case ID: 1092974
    Scenario: User Should not be able to view Manage Reclass Rules Button for approved documents

        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Select multiple pending documents
        Then I click on Actions dropdown menu and click on Approve Option
        And I check for the manage reclass rules button after documents approval

    # Test Case ID: 1092970
    Scenario: User Should not be able to Approve or Unapprove documents from document center tab

        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Select multiple pending documents
        Then I click on Actions dropdown menu and click on Approve Option


