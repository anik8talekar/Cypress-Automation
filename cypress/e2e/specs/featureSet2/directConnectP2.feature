Feature: Direct Connect

    # Test Case ID: 1085833
    Scenario: User Should be able to create new taxonomy template

        Given I Open the Application
        When I click on existing engagement
        And I click on Admin side menu and click on engagaement settings tab
        Then I click on Direct Connect tab
        And I click on edit button under actions column and Click on Taxonomy Templates tab
        Then I click on Add Template button and fill name
        And I click on save button
        Then I verify the template name under taxonomy template name dropdown

    # Test Case ID: 1086427
    Scenario: User Should be able to Import taxonomy template

        Given I Open the Application
        When I click on existing engagement
        And I click on Admin side menu and click on engagaement settings tab
        Then I click on Direct Connect tab
        And I click on edit button under actions column and Click on Taxonomy Templates tab
        Then I click on Add Template button and fill name
        And I click on save button
        Then I Click on Download Import template button
        And I Click on Import template button and upload a TaxonomyMapping ImportTemplate
        Then I verify Import template is uploaded from Data schedule item details table

    # Test Case ID: 1086461
    Scenario: User Should be able to make manual edits to taxonomy template

        Given I Open the Application
        When I click on existing engagement
        And I click on Admin side menu and click on engagaement settings tab
        Then I click on Direct Connect tab
        And I click on edit button under actions column and Click on Taxonomy Templates tab
        Then I click on Add Template button and fill name
        And I click on save button

    # Test Case ID: 1086486
    Scenario: User Should be able to make a copy of taxonomy template

        Given I Open the Application
        When I click on existing engagement
        And I click on Admin side menu and click on engagaement settings tab
        Then I click on Direct Connect tab
        And I click on edit button under actions column and Click on Taxonomy Templates tab
        Then I click on Add Template button and fill name
        And I click on save button
        Then I click on save as button and click on save button

    # Test Case ID: 1086502
    Scenario: User Should be able to add direct connect expected document

        Given I Open the Application
        When I click on existing engagement
        And I Click on Document Center Section
        Then I Click on Expected Documents tab
        And I Click on add expected document button and turn on direct connect toggle button
        Then I Fill all the required information
        And I Click on Investment radio button under assign in TRACK to field
        Then I Click on Save Button
        And I Verify expected document is added under expected documents tab