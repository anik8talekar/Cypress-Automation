Feature: Form 8621 Edit Values

    #Test Case ID: 1228093
    Scenario: The User able to edit values in K-3 Part VII of form 8621

        Given I Open the Application
        When I click on existing engagement
        And I click on Document Center tab
        Then I open review page for a K-3 document
        And I edit values in K-3 Part VII Grid


    #Test Case ID: 1228073
    Scenario: The User able to edit values in k-1 footnotes grid of form 8621

        Given I Open the Application
        When I click on existing engagement
        And I click on Document Center tab
        Then I open review page for a K-1 document
        And I click on the K-1 footnotes
        Then I edit the values in K-1 footnotes grid
