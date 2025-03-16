Feature: Thumbs Up Down

    # Test Case ID: 1650687
    Scenario: User Should be able to see Thumbs Visibility in K-1 Document Review

        Given I Open the Application
        When I click on existing engagement
        And I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to it's review page
        Then I Check for Thumbs Up Down Icons above the PDF

    # Test Case ID: 1650689
    Scenario: User Should be able to see Thumbs Visibility in K-3 Document Review

        Given I Open the Application
        When I click on existing engagement
        And I go to Document Center Documents tab & Open a 2022 K-3 Doc & go to it's review page
        Then I Check for Thumbs Up Down Icons above the PDF

    # # Test Case ID: 1650690
    Scenario: User Should be able to see Thumbs Visibility in 8621 Preview Page

        Given I Open the Application
        When I click on existing engagement
        And I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Footnotes tab
        And I Click on Show Preview 8621 icon
        Then I Check for Thumbs Up Down Icons above the PDF

    # # Test Case ID: 1650691
    Scenario: User Should be able to see Thumbs Visibility in 1040 Preview Page

        Given I Open the Application
        When I click on existing engagement
        And I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Schedule Item Details tab
        And I Click on Form 1040 icon above the grid
        Then I Check for Thumbs Up Down Icons above the PDF

    # Test Case ID: 1650927
    Scenario: User Should be able to see Thumbs Up Feedback message

        Given I Open the Application
        When I click on existing engagement
        And I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to it's review page
        And I Click on Thumbs Up Icon
        Then I Verify Success Notification & Thumbs Up Icon

    # Test Case ID: 1655838
    Scenario: User Should be able to see Thumbs Down Feedback message

        Given I Open the Application
        When I click on existing engagement
        And I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to it's review page
        And I Click on Thumbs Down Icon
        And I Select a Reason & Add Description for Thumbs Down
        Then I Verify Success Notification & Thumbs Down Icon

    # Test Case ID: 1657884
    Scenario: User Should be able to view Tax Year Column in Upload File Screen

        Given I Open the Application
        When I click on existing engagement
        And I go to Upload Files tab
        And I Expand any File Name from the grid
        Then I Check for tax Year Column from the Expanded File Name Grid

    # Test Case ID: 1657885
    Scenario: User Should be able to verify Tax Year Column Data matches with file name

        Given I Open the Application
        When I click on existing engagement
        And I go to Upload Files tab
        And I Expand any File Name from the grid
        Then I check the File Name's Tax Year and Tax Year matches