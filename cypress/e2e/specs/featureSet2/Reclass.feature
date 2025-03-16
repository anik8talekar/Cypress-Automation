Feature: Reclass

    # Test Case ID: 1099875
    Scenario: User Should be able to add In Line Reclass

        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Click on Review Icon Under Actions Column
        Then I Click on Reclass Form Icon under the actions column from part III from RHS
        And I Type Name and select Schedule item from drop down
        Then I Fill the Reclass amount under This Reclass textbox
        And I click on save Button to save reclass
        Then I verify Reclass under the Reclass grid
        And I Delete the reclass as a Prerequisite

    # Test Case ID: 1099939
    Scenario: User Should be able to add Reclass from Reclass tab

        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Click on Review Icon Under Actions Column
        Then I Select Reclasses from view by dropdown from the RHS of the review screen
        And I Click on Add Reclasses Button Logo
        Then I Type Name and select Schedule item from Dropdown
        And I Fill the Reclass amount under This Reclass TextBox
        Then I click on save Button
        And I verify Reclass under the Reclass grid for Reclass tab
        Then I Delete the reclass as a Prerequisite for Reclass tab

    # Test Case ID: 1101610
    Scenario: User Should be able to edit Reclass from Reclass tab

        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Click on Review Icon Under Actions Column for editing
        Then I Select Reclasses from view by dropdown from the RHS of the review screen for editing
        And I Click on Add Reclasses Button Logo for editing
        Then I Type Name and select Schedule item from Dropdown for editing
        And I Fill the Reclass amount under This Reclass TextBox for editing
        Then I click on save Button for editing
        And I click on Edit Button Icon under actions column and edit some fields
        Then I verify Reclass under the Reclass grid for Edited Reclass
        And I Delete the reclass as a Prerequisite for Reclass tab for editing

    # Test Case ID: 1101501 & 1101500
    Scenario: User Should be able to edit Reclass from Reclass Slideout

        Given I Open the Application
        When I click on existing engagement
        And I Click on Admin tab from side menu
        Then I Click on Engagement Settings tab from admin menu
        And I Click on Reclass rules tab
        Then I click on Add Reclass Rule Button for editing reclass Slideout
        And I Select Tax Year Schedule From and To for editing reclass Slideout
        Then I click on save Button for adding reclass rules for editing reclass Slideout
        And I Save The Reclass and edit it
        Then I click on Edit Icon Under Actions column
        And I Change From and To from the Reclass Slideout
        Then I click on save Button for editing
        And I verify From and to Schedule names from the reclass grid
        Then I Delete the reclass as a Prerequisite for creating reclasses for editing reclass Slideout

    # Test Case ID:  1100029
    Scenario: User Should be able to create reclass rules and verify them through document center documents tab

        Given I Open the Application
        When I click on existing engagement
        And I Click on Admin tab from side menu
        Then I Click on Engagement Settings tab from admin menu
        And I Click on Reclass rules tab for adding reclass rules
        Then I click on Add Reclass Rule Button
        And I Select Tax Year Schedule From and To
        Then I click on save Button for adding reclass rules
        And I Verify reclasses is added in the reclass rules grid
        Then I verify Reclass Rules from Document Center Documents
        And I Select a document and select Add reclass rules option from the actions dropdown
        Then I Click on the checkbox to assign rule to the document
        And I Click on Save button for adding the reclass rules
        Then I Delete the reclass as a Prerequisite for creating reclasses

