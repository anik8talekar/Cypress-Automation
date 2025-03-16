Feature: Engagement Setup

    # Test Case ID: 1089266
    Scenario: User Should be able to Create Business Entity
        Given I Open the Application
        When I click on existing engagement
        And I Click on Business Entities Section
        Then I Click on Add Business Entity Button
        And I Fill the Required Information
        Then I verify Business Entity is added from business entity tab

    # Test Case ID: 1089272
    Scenario: User Should be able to Create Business Entities via bulk upload
        Given I Open the Application
        When I click on existing engagement
        And I Click on Import and Export Data Section
        Then I Click on Business Entities tab
        And I Click on Import Data Button
        Then I Click on Upload Button and Upload a 2021 Business Entity Template File

    # Test Case ID: 1093073
    Scenario: User Should be able to Create Business Entity from Match Document Slide out (doc center)
        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Click on Match Icon Under Actions Column
        Then I Click on New Button Besides Existing Button and Fill Required Information
        And I Click on Match Button
        Then I verify Business Entity is created under Documents tab

    # Test Case ID: 1093050
    Scenario: User Should be able to Create Business Entity from Match Document Slideout (review docs)
        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Click on Review Icon Under Actions Column
        Then I Click on Match Button from Review Screen
        And I Click on New Button Besides all the fields and Fill Required Information
        Then I Click on Match Button

    # Test Case ID: 1089347
    Scenario: User Should be able to Create Contact
        Given I Open the Application
        When I click on existing engagement
        And I Click on Contacts Section
        Then I Click on Add Contacts Button
        And I Fill All The Details
        Then I Click on Save Button Contacts
        And I Verify Newly Created Contact from contacts tab

    # Test Case ID: 1093073
    Scenario: User Should be able to Create Contact from Match Document Slideout (doc center)
        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Click on Match Icon Under Actions Column
        Then I Click on New Button Besides Existing Contact Button and Fill Required Information
        And I Click on Match Button
        Then I Click On Contacts Section from side menu and check newly created contact is visible or not

    # Test Case ID: 1093073
    Scenario: User Should be able to Create Contact from Match Document Slideout (review docs)
        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Click on Review Icon Under Actions Column
        Then I Click on Match Button from Review Screen
        Then I Click on New Button Besides Existing Contact Button and Fill Required Information
        Then I Click on Match Button
        And I Click On Contacts Section from side menu and check newly created contact is visible or not

    # Test Case ID: 1089402
    Scenario: User Should be able to Create Expected Document via Bulk Import
        Given I Open the Application
        When I click on existing engagement
        # And I Click on Admin Tab from side menu
        # Then I Click on Engagement Settings Tab from Admin menu
        # And I Click On Direct Connect Tab which is besides Review Levels tab
        # Then I Click on Add Profile Button
        # And I Select Client Name and Tax Year from the drop downs
        # Then I Click on Save Button
        # And I Click on Edit Button Under Actions Columnn for newly added Profile
        # Then I Click on Create BE from TRACK FTE Button under Business Entities tab
        # And I click on Close option from the Import from TRACK popup
        # Then I Click on Taxonomy Template tab
        # And I Click on Add Template Button
        # Then I Give a name to the template from the popup
        # And I click on Save Button
        # Then I Click on Save and Close Button
        And I Click on Import and Export Data Section
        Then I Click on Expected Documents Tab
        And I Click on Import Data Button
        Then I Click on Upload Button and Upload a Expected Documents-Import Template File

    # Test Case ID: 1091224
    Scenario: User Should be able to Download populated import template
        Given I Open the Application
        When I click on existing engagement
        And I Click on Import and Export Data Section
        Then I Click on Expected Documents Tab
        And I Click on Export All Data Button from Expected Documents tab
        Then I Click on Business Entities tab
        And I Click on Export All Data Button from Business Entities tab

    # Test Case ID: 1091225
    Scenario: User Should be able to Download empty import template
        Given I Open the Application
        When I click on existing engagement
        And I Click on Import and Export Data Section
        Then I Click on Expected Documents Tab
        And I Click on Download Blank Import Template Button from Expected Documents tab
        Then I Click on Business Entities tab
        And I Click on Download Blank Import Template Button from Business Entities tab

    # Test Case ID: 1093102
    Scenario: User Should be able to Create Saved Search saved filters
        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Select the Filters by clicking on the dropdown below columns name
        Then I Click on Save Search Button
        And I Give a Appropriate name to save search filter
        Then I Click on Save Button

    # Test Case ID: 1093102
    Scenario: User Should be able to Check that Saved Searches links work
        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Documents tab
        And I Select the Filters by clicking on the dropdown below columns name
        Then I Click on Save Search Button
        And I Give a Appropriate name to save search filter
        Then I Click on Save Button
        And I Click on Search by drop down
        Then I Select The Saved Filter Name from drop down

    # Test Case ID: 1089347
    Scenario: Error message appears when creating duplicate contact names
        Given I Open the Application
        When I click on existing engagement
        And I Click on Contacts Section
        Then I Click on Add Contacts Button
        And I Fill all the details
        Then I Click on Save Button Contacts
        And I verify a Error message