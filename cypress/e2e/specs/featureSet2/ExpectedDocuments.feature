Feature: Expected Documents

    # Test Case ID: 1093661
    Scenario: User Should be able to match expected document from doc center screen

        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Click on Match Icon Under Actions Column
        Then I Click on existing expected document name dropdown and select a expected document
        And I Click on Match Button and verify the document is matched

    # Test Case ID: 1093688
    Scenario: User Should be able to match expected document from review documents screen
        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Click on Review Icon Under Actions Column
        Then I Click on Match Button from Review Screen
        And I Click on existing expected document name dropdown and select a Expected Document
        Then I Click on Match Button and verify the Document is Matched

    # Test Case ID: 1093699
    Scenario: User Should be able to match expected document from doc center screen through intelligent matching
        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Click on Match Icon Under Actions Column
        Then I Click on existing expected document name dropdown and select a expected document which is ready for intelligent matching
        And I Click on Match Button and verify the document is matched via intelligent matching

    # Test Case ID: 1093706
    Scenario: User Should be able to unmatch bulk expected document from actions menu
        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Expected Documents tab
        And I Select multiple matched expected documents and click on actions menu
        Then I Click on Unmatch option from actions drop down menu and click on Unmatch popup

    # Test Case ID: 1093709
    Scenario: User Should be able to set projected received and cutoff dates
        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Expected Documents tab
        And I Select a expected documents and click on actions menu
        Then I Click on Set Dates option from actions drop down menu
        And I Set Projected receive date and cutoff dates and click on save button