Feature: DataFlow Landing Page

    # Test Case ID: 1088451
    Scenario: User Should be able to see Engagement List with Name,Type and Line Of Business
        Given I Open the Application
        And I Click on View Type as Admin Button
        Then I verify Engagement List with Name,Type and Line Of Business

    # Test Case ID: 1076176
    Scenario: Admin Should be able to add new Engagements
        Given I Open the Application
        And I Click on View Type as Admin Button
        Then I Click on Add Engagement Button
        And I Click on Save Button

    # Test Case ID: 1088490
    Scenario: Admin Should be able to Edit Engagements
        Given I Open the Application
        And I Click on View Type as Admin Button
        Then I Click on Edit Button
        And I Change Engagement Name
        Then I Click on Save Button

    # Test Case ID: 1088496
    Scenario: User Should be able to Search Engagements through Search Filter
        Given I Open the Application
        And I Type Client Name or Engagement Name in Search Box
        Then I verify Engagement Name in the list